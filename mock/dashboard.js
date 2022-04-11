function mockApi(devServer, data) {
  devServer.app.post('/api/goods', (req, res) => {
    console.log(req.body);
    res.json({
      code: 1,
      data,
    });
  });
}

function generateList(initDemo, num) {
  const list = [];
  for (let i = 0; i < num; i += 1) {
    const item = {};
    Object.keys(initDemo).forEach((v) => {
      item[v] = `${initDemo[v]}-${i + 1}`;
    });
    list.push(item);
  }
  return list;
}

const listData = {
  list: generateList({
    name: '小明天',
    age: 18,
    address: '杭州',
  }, 99),
};

module.exports = {
  getList: (devServer) => mockApi(devServer, listData),
};
