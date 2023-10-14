import { useStore } from 'vuex'

export const useFetchWithToken = <T>(url: string, opts: any) => {
  const store = useStore<{ token: string }>()
  const storedToken = store.state.token

  const fetch = useFetch<T>(url, {
    ...opts,
    headers: storedToken ? { Authorization: `Bearer ${storedToken}` } : {}
  })

  return { ...fetch, storedToken }
}
