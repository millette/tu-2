"use strict"

const withMDX = require("@next/mdx")()
const withCSS = require("@zeit/next-css")

module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "mdx"],
  })
)
