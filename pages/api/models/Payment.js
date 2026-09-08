import { supabase } from '../utils/db'

const TABLE_NAME = 'Payment'

export async function SavePayment (payload) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert(payload)
    .select()

  if (error) {
    throw error
  }

  return data
}
