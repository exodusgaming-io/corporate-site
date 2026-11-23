import {defineConfig, defineSingleton} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

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

  plugins: [structureTool({structure}), visionTool()],

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
