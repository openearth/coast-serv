module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "coast-serv" : "/",
  chainWebpack: config => {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("html-loader")
      .loader("html-loader")
      .end()
      .use("markdown-loader")
      .loader("markdown-loader")
      .end();
  }
};
