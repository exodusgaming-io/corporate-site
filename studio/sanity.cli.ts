import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'a1r4gwxv',
    dataset: 'production',
  },
  // Deployed to https://exodusgaming.sanity.studio by `npm run deploy`.
  studioHost: 'exodusgaming',
  deployment: {
    appId: 'nawdcudebrpp9v9jk0calkal',
    // The hosted Studio picks up new Sanity releases without a redeploy.
    autoUpdates: true,
  },
})
