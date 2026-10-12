// composables/useNavigationQuery.ts
export const useQueryCollectionNavigation = (
  collection: string,
  queryKey?: string
) => {
  const key = queryKey ?? `nav-${collection}`
  return useAsyncData(key, () => {
    return queryCollectionNavigation(collection as any)
  })
}
//const { data: nav } = useQueryCollectionNavigation('content') #if you want to use a custom queryKey, it is inserted as a second parameter