module.exports = {
  lintOnSave: false,
  configureWebpack: cfg => {
     cfg.output.publicPath = "navigate-map"
  },
  outputDir: 'docs',
}
