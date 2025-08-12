import React from 'react'
import clsx from 'clsx'

type Product = {
  id: string
  title: string
  description?: string
  price_cents: number
  currency: string
  image_url?: string
}

export function ProductCard({ product }: { product: Product }) {
  const price = (product.price_cents / 100).toFixed(2)
  return (
    <div className={clsx("border rounded p-4 flex flex-col")}>
      <div className="h-40 w-full bg-gray-100 mb-3 flex items-center justify-center">
        {product.image_url ? <img src={product.image_url} alt={product.title} className="max-h-full"/> : <span>No image</span>}
      </div>
      <h3 className="font-medium text-lg">{product.title}</h3>
      <p className="text-sm text-gray-600 flex-1">{product.description}</p>
      <div className="mt-3 font-semibold">{price} {product.currency}</div>
    </div>
  )
}
