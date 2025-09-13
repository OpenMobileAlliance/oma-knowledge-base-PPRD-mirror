export const useQueryCollection = (
    collection: string,
    path: string,
    queryKey?: string
) => {
    const key = queryKey ?? `${collection}-${path}`
    return useAsyncData(key, () => {
        return queryCollection(collection as any).path(path).first()
    })
}

//const { data: homepage } = useQueryCollection('content', '/') #if you want to use a custom queryKey, it is inserted as a third parameter
