// WCAG 2 contrast ratio between two #rrggbb colours.
function luminance(hex: string): number {
  const value = hex.trim().replace("#", "");
  const channels = [0, 2, 4].map((i) => parseInt(value.slice(i, i + 2), 16) / 255);
  const [r, g, b] = channels.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(foreground: string, background: string): number {
  const [light, dark] = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (light + 0.05) / (dark + 0.05);
}

// AA: 4.5:1 for text, 3:1 for large text (24px, or 18.66px bold) and for icons and borders.
export function contrastLevel(ratio: number): "AA" | "AA large" | "fail" {
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return "AA large";
  return "fail";
}
