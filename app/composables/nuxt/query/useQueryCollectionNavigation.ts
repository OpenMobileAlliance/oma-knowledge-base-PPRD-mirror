// composables/useNavigationQuery.ts
// `icon` is read from page frontmatter (and from a folder's .navigation.yml) and is available on every nav node.
export const useQueryCollectionNavigation = (
  collection: string,
  queryKey?: string
) => {
  const key = queryKey ?? `nav-${collection}`
  return useAsyncData(key, () => {
    return queryCollectionNavigation(collection as any, ['icon'])
  })
}
//const { data: nav } = useQueryCollectionNavigation('content') #if you want to use a custom queryKey, it is inserted as a second parameterbreadcrumbs.vue
