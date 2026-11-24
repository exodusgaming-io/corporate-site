import {defineConfig, defineSingleton} from 'sanity'
import {defineLocations, presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

// The site shown in the Preview tool. Drafts reach it through the Studio, so the static
// staging build works as is. For local work: SANITY_STUDIO_PREVIEW_URL=http://localhost:3000
const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL || 'https://staging.exodusgaming.io'

export default defineConfig({
  name: 'default',
  title: 'exodusgaming.io',

  projectId: 'a1r4gwxv',
  dataset: 'production',

  // Only Google on the Studio's own login screen (`sanity dev`, self-hosted builds).
  // The hosted *.sanity.studio signs in through the Sanity Dashboard instead, which offers
  // every provider. Who gets in is decided by project membership (invitations), not by this list.
  auth: {
    redirectOnSingle: true,
    providers: [
      {name: 'google', title: 'Google', url: 'https://api.sanity.io/v1/auth/login/google'},
    ],
  },

  plugins: [
    structureTool({structure}),
    presentationTool({
      title: 'Preview',
      previewUrl,
      resolve: {
        locations: {
          siteSettings: defineLocations({locations: [{title: 'Home', href: '/'}]}),
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    singletons: [
      defineSingleton({
        documentId: 'siteSettings',
        schemaType: 'siteSettings',
        title: 'Site settings',
      }),
    ],
  },
})
