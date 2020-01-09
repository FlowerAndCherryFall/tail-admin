import {
  get
} from '@/utils/request'

export function getList(page, per = 10) {
  return get('/api/v1/admin/products', {
    page,
    per
  })
}
