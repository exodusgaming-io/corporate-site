import type {StructureResolver} from 'sanity/structure'

const singletonTypes = new Set(['siteSettings'])

export const structure: StructureResolver = (S) =>
  S.list()
    .id('content')
    .title('Content')
    .items([
      S.listItem().singleton('siteSettings'),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId() ?? '')),
    ])
