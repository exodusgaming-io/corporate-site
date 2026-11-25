"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

// Animated red "liquid" behind heroes and the CTA band, ported from the Claude Design mockup (exodus-gradient.js).
// It paints over the section's CSS gradient; without WebGL that CSS gradient stays. With prefers-reduced-motion
// it draws one still frame. It pauses off screen and follows the pointer a little.

export type GradientVariant = "hero" | "deep" | "ember";

const VARIANTS: Record<GradientVariant, { bias: number; heat: number; focus: [number, number] }> = {
  hero: { bias: -0.02, heat: 0.78, focus: [0.78, 0.82] },
  deep: { bias: -0.2, heat: 0.7, focus: [0.12, 1.0] },
  ember: { bias: -0.16, heat: 0.7, focus: [0.62, -0.05] },
};

const VERTEX = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";

// Colour ramp: Onyx → Rich Mahogany → Molten Lava → Pure Red → a touch lighter.
const FRAGMENT = `precision mediump float;
uniform vec2 uRes;uniform float uTime;uniform vec2 uMouse;uniform float uBias;uniform float uHeat;uniform vec2 uFocus;uniform float uPull;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p=p*2.02+vec2(1.7,9.2);a*=.42;}return v;}
vec3 ramp(float t){
vec3 c0=vec3(.043,.039,.039),c1=vec3(.231,0.,.004),c2=vec3(.475,0.,.016),c3=vec3(.969,.075,.055),c4=vec3(1.,.27,.22);
if(t<.3)return mix(c0,c1,smoothstep(0.,.3,t));
if(t<.55)return mix(c1,c2,smoothstep(.3,.55,t));
if(t<.86)return mix(c2,c3,smoothstep(.55,.86,t));
return mix(c3,c4,smoothstep(.86,1.,t)*.4);}
void main(){
vec2 uv=gl_FragCoord.xy/uRes;float ar=uRes.x/uRes.y;
vec2 p=vec2(uv.x*ar,uv.y)*.62;float t=uTime*.028;
vec2 m=vec2(uMouse.x*ar,uMouse.y)*.62;vec2 d=p-m;float md=exp(-dot(d,d)*5.);
vec2 q=vec2(fbm(p+vec2(0.,t)),fbm(p+vec2(5.2,1.3)-t));q=q*q*1.6;
vec2 r=vec2(fbm(p+3.*q+vec2(1.7,9.2)+t*1.4-d*md*.7*uPull),fbm(p+3.*q+vec2(8.3,2.8)-t*1.1));
float f=fbm(p+1.8*r);
vec2 fd=(uv-uFocus)*vec2(ar,1.);float focus=1.-smoothstep(0.,1.25,length(fd));
float v=(f-.3)*2.1+uBias+focus*uHeat+md*.22*uPull;
gl_FragColor=vec4(ramp(clamp(v,0.,1.)),1.);}`;

// The canvas renders at under half resolution; the result is blurry by design and much cheaper.
const SCALE = 0.45;

export function Gradient({ variant = "hero", className }: { variant?: GradientVariant; className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    // A fresh canvas per effect run: a context lost in cleanup can't be reused (React runs effects twice in dev).
    const canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 size-full";
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, preserveDrawingBuffer: false });
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type) as WebGLShader;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);
    host.appendChild(canvas);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "a");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniform = (name: string) => gl.getUniformLocation(program, name);
    const u = {
      res: uniform("uRes"),
      time: uniform("uTime"),
      mouse: uniform("uMouse"),
      bias: uniform("uBias"),
      heat: uniform("uHeat"),
      focus: uniform("uFocus"),
      pull: uniform("uPull"),
    };
    const settings = VARIANTS[variant];
    gl.uniform1f(u.bias, settings.bias);
    gl.uniform1f(u.heat, settings.heat);
    gl.uniform2f(u.focus, ...settings.focus);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const seed = Math.random() * 40 + 20;
    const start = performance.now();
    const mouse: [number, number] = [...settings.focus];
    let target: [number, number] = [...settings.focus];
    let pull = 0;
    let pullTarget = 0;
    let visible = true;
    let frame = 0;

    const draw = () => {
      const still = reducedMotion.matches;
      mouse[0] += (target[0] - mouse[0]) * 0.035;
      mouse[1] += (target[1] - mouse[1]) * 0.035;
      pull += ((still ? 0 : pullTarget) - pull) * 0.03;
      gl.uniform2f(u.res, canvas.width, canvas.height);
      gl.uniform1f(u.time, still ? seed : seed + (performance.now() - start) / 1000);
      gl.uniform2f(u.mouse, mouse[0], mouse[1]);
      gl.uniform1f(u.pull, pull);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = () => {
      cancelAnimationFrame(frame);
      draw();
      if (visible && !reducedMotion.matches) frame = requestAnimationFrame(loop);
    };

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(2, Math.round(width * SCALE));
      canvas.height = Math.max(2, Math.round(height * SCALE));
      gl.viewport(0, 0, canvas.width, canvas.height);
      draw();
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
        target = [x, y];
        pullTarget = 1;
      } else {
        pullTarget = 0;
      }
    };

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) loop();
    });
    const size = new ResizeObserver(resize);
    visibility.observe(canvas);
    size.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    reducedMotion.addEventListener("change", loop);
    resize();
    loop();

    return () => {
      cancelAnimationFrame(frame);
      visibility.disconnect();
      size.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      reducedMotion.removeEventListener("change", loop);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      canvas.remove();
    };
  }, [variant]);

  return <div ref={hostRef} aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)} />;
}
