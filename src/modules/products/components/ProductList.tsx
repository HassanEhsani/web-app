import React from 'react'
import { useProducts } from '../hooks/useProducts'
import { ProductCard } from '../ui/ProductCard'

export default function ProductList() {
  const { data, isLoading, isError } = useProducts()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Failed to load products</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((p:any) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
