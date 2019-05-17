const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-deal-page-js": hot(preferDefault(require("/Users/chubbymaus/Desktop/jetset/src/templates/DealPage.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/chubbymaus/Desktop/jetset/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/chubbymaus/Desktop/jetset/src/pages/404.js"))),
  "component---src-pages-deals-index-js": hot(preferDefault(require("/Users/chubbymaus/Desktop/jetset/src/pages/deals/index.js"))),
  "component---src-pages-howitworks-js": hot(preferDefault(require("/Users/chubbymaus/Desktop/jetset/src/pages/howitworks.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/chubbymaus/Desktop/jetset/src/pages/index.js")))
}

