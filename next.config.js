"use strict"

const withMDX = require("@next/mdx")()
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer(
  withMDX({
    pageExtensions: ["js", "mdx"],
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/out' : '',
    assetPrefix: process.env.NODE_ENV === "production" ? "/tu-2" : "",
  })
)
