require('dotenv').config({
  path: `.env`,
})

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `Unified`
  },
  plugins: [],
}