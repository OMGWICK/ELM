const data = {
  locationList: [
    {
      address: '神笔画室',
      phoneNum: getPhone(),
      name: getName(),
    },
    {
      address: '红叶网咖',
      phoneNum: getPhone(),
      name: getName(),
    },
  ],
};

function getPhone() {
  const phoneNum =
    '135' + Math.floor(Math.random() * (10 ** 8 - 10 ** 7) + 10 ** 7);
  return phoneNum;
}

function getName() {
  const name = ['张飞', '刘备', '关羽', '诸葛亮', '周瑜'][
    Math.round(Math.random() * 4)
  ];
  return name;
}
module.exports = data;
