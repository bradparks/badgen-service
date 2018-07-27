const serveMarked = require('serve-marked')

module.exports = serveMarked('libs/index.md', {
  title: 'Badgen - Fast badge generating service',
  preset: 'merri',
  inlineCSS: `
    body { max-width: 890px; padding-bottom: 1em }
    table { border-spacing: 0 }
    td { padding: 0 1em 0 0; font-size: 14px; white-space: nowrap; height: 26px }
    td img { height: 20px; position: relative; top: 2px }
    td a { font: 12px/14px monospace }
    pre, code { background-color: #f4f6f9; font-weight: 400 }
    li code { padding: 0.2em 0.4em; display: pre }
    li { padding: 0.4em 0 }
    h1 + p { letter-spacing: 0.1px }
    h1 + p a { display: inline-block; margin-top: 1em; padding: 4px; height: 20px }
    h1 + p img { height: 20px }
    dt { margin: 1em 0; border-bottom: 1px solid #DDD; line-height: 2.6em }
    dd { font: 14px/20px monospace; vertical-align: top; height: 28px; white-space: nowrap }
    dd img { vertical-align: top }
    dd b { display: inline-block; min-width: 12em; text-align: right; font-weight: 300 }
    dd i { display: inline-block; min-width: 12em }
  `,
  beforeHeadEnd: `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`,
  trackingGA: 'UA-4646421-14'
})
