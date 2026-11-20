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

  // Google only: editors sign in with their company Google account and its 2FA.
  // A static providers array replaces Sanity's default list (GitHub, e-mail/password).
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
