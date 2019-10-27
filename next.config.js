"use strict"

const withMDX = require("@next/mdx")()
const withCSS = require("@zeit/next-css")
// const withCSS = (x) => x

module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "mdx"],
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      })
      return config
    },
  })
)
