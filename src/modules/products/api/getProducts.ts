import { supabase } from '@/lib/supabaseClient'

export async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('id, title, description, price_cents, currency, image_url, stock, created_at')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data ?? []
}
