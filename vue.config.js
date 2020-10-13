module.exports = {
  css: {
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // `primary` is global variables fields name
        globalVars: {
          '@primary': '#0089dc',
          '@padding': '2vw',
          '@gray': 'rgba(99, 99, 99, 0.938)',
          '@border': 'rgba(224, 221, 221, 0.3)',
        },
      },
    },
  },
  productionSourceMap: false,
};
