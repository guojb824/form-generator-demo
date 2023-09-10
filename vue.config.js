module.exports = {
  configureWebpack: {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      "element-ui": "ELEMENT",
      ELEMENT: "ELEMENT",
    },
  },

  chainWebpack(config) {
    // config.externals({
    //   "element-ui": {
    //     commonjs: "ELEMENT",
    //     commonjs2: "ELEMENT",
    //     umd: "ELEMENT",
    //     root: "ELEMENT",
    //   },
    //   ELEMENT: {
    //     commonjs: "ELEMENT",
    //     commonjs2: "ELEMENT",
    //     umd: "ELEMENT",
    //     root: "ELEMENT",
    //   },
    // });
  },
};
