import { supabase } from '../utils/db'

const TABLE_NAME = 'Create_payment'

export async function createPayment (payload) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert(payload)
    .select()

  if (error) {
    throw error
  }

  return data
}
