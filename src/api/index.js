import request from '@/utils/request';

export function getList(data) {
  return request.post('/test', data);
}

export function getRadarData(data) {
  return request.post('/radar/list', data);
}
