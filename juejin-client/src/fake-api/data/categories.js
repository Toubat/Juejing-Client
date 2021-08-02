// 分类数据
export const categories = [
  { category_id: 0, category_name: '推荐' },
  {
    category_id: 1,
    category_name: '后端',
    children: [
      { category_id: 11, category_name: 'Java' },
      { category_id: 12, category_name: 'Python' },
      { category_id: 13, category_name: 'Go' },
    ],
  },
  {
    category_id: 2,
    category_name: '前端',
    children: [
      { category_id: 21, category_name: 'JavaScript' },
      { category_id: 22, category_name: 'Vue.js' },
      { category_id: 23, category_name: 'React.js' },
    ],
  },
  {
    category_id: 3,
    category_name: 'Android',
    children: [
      { category_id: 31, category_name: 'Flutter' },
      { category_id: 32, category_name: 'Java' },
      { category_id: 33, category_name: 'Kotlin' },
    ],
  },
  {
    category_id: 4,
    category_name: 'iOS',
    children: [
      { category_id: 41, category_name: 'Swift' },
      { category_id: 42, category_name: 'Objective-C' },
      { category_id: 43, category_name: 'Flutter' },
    ],
  },
];