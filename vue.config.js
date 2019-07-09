module.exports = {
  lintOnSave: false,
  configureWebpack: cfg => {
     cfg.output.publicPath = "navigate-miami-map"
  },
  outputDir: 'docs',
}
