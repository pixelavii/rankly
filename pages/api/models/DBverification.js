import { supabase } from '../utils/db'

const TABLE_NAME = 'Payment'

export async function DBverification (payload) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .eq('idempotency_key', idempotency_key)

  if (error) {
    throw error
  }

  return data
}
