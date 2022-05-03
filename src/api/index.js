import request from '@/utils/request';

export function login(data) {
  return request.post('/mock/927859/login', data);
}

export function getUserInfo(data) {
  return request.post('/mock/927859/userInfo', data);
}

export function getList(data) {
  return request.post('/mock/927859/list', data);
}

export function getRadarData(data) {
  return request.post('/mock/927859/radar', data);
}
