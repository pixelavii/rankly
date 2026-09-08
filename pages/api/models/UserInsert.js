import { supabase } from '../utils/db'

const TABLE_NAME = 'Users'

export async function createUser (payload) {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert(payload)
    .select()

  if (error) {
    throw error
  }

  return data
}
