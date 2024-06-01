const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: "https://apihub.kma.go.kr",
      pathRewrite: {
        //naver_api로 시작되는 url을 자동 인식 -> 프록시 처리, /naver_api는 ""로 대체됨
      },
      changeOrigin: true,
    })
  );
};
