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
