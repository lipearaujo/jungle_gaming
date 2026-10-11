import { api } from '#/lib/axios'
import type ICategory from '#/types/category'

export const fetchCategories = async () => {
  const response = await api.get<ICategory[]>('/categories')

  return response.data
}
