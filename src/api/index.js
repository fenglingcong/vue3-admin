import request from '@/utils/request';

export function getList(data) {
  return request.post('/goods', data);
}
