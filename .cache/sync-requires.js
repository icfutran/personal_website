
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/roach/Documents/ita/personal_website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/roach/Documents/ita/personal_website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/roach/Documents/ita/personal_website/src/pages/index.js"))
}

