import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../api/getProducts'

export function useProducts() {
  return useQuery(['products'], fetchProducts, {
    staleTime: 1000 * 60,
    retry: 1
  })
}
