/**
 * 为了避免webpack配置文件过于庞大,把解析css文件的postcss-loader的配置抽离出来，执行webpack相关配置时会自动读取
 * 也可以配置在webpack的module.rules中
 */

module.exports = {
  plugins: ['autoprefixer']
};
