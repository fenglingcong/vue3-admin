import request from '@/utils/request';

export function getList(data) {
  return request.post('/mock/927859/list', data);
}

export function getRadarData(data) {
  return request.post('/mock/927859/radar', data);
}
