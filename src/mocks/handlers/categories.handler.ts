import { http, HttpResponse } from 'msw/http'
import { categories } from '../data/categories'

export const categoryHandlers = [
  http.get('/api/categories', () => {
    return HttpResponse.json(categories)
  }),
]
