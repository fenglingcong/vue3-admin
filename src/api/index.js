import request from '@/utils/request';

export function getList(data) {
  return request.post('/crm/talent/list', data);
}
