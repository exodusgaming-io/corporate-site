import type {StructureResolver} from 'sanity/structure'

// documentTypeListItems() already leaves out types registered in document.singletons.
export const structure: StructureResolver = (S) =>
  S.list()
    .id('content')
    .title('Content')
    .items([S.listItem().singleton('siteSettings'), S.divider(), ...S.documentTypeListItems()])
