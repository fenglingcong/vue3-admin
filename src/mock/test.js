import Mock from 'mockjs';
import { parse } from 'qs';

Mock.mock('/api/test', (options) => {
  const data = parse(options.body);
  console.log(data);

  return {
    code: 1,
    data: Mock.mock({
      'list|129': [
        {
          name: '@name',
          'age|1-120': 18,
          'address|1': ['杭州', '北京', '重庆'],
        },
      ],
      total: 129,
    }),
  };
});

Mock.mock('/api/radar/list', () => {
  const obj = {
    code: 1,
    data: Mock.mock({
      'list|7-11': [
        {
          item: '@name',
          'a|30-90': 30,
          'b|40-90': 40,
          'd|50-90': 50,
        },
      ],
    }),
  };
  return obj;
});
