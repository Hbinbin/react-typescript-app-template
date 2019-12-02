/** 获取当前开发环境 */
export function getEnv () {
  return {
    isDebug: localStorage.getItem('isDebug') === '1',
    isDev: process.env.NODE_ENV === 'development', // 本地开发环境
    isPrd: process.env.NODE_ENV === 'production' // 生产环境
  }
}
/** 获取当前系统信息 */
export function getPlatform () {
  const ua = navigator.userAgent.toLowerCase()
  const sysPlatform = navigator.platform.toLowerCase()
  const isIpad = ua.includes('ipad')
  const isAndroid = ua.includes('android')
  const isIOS = ua.includes('iphone os')
  const isIphoneX = isIOS && (screen.height >= 812 && screen.width >= 375)
  const isWeixin = ua.includes('micromessenger')
  const isWeixinMiniProgram = isWeixin && ua.includes('miniprogram') || window.__wxjs_environment === 'miniprogram'
  const isWeixinBrower = isWeixin && !isWeixinMiniProgram || window.__wxjs_environment === 'browser'
  const isComputerBrower = sysPlatform.includes('win') || sysPlatform.includes('mac')
  const isAliPayMiniProgram = ua.includes('alipayclient')
  return {
    isAndroid,
    isIOS,
    isPhone: isAndroid || isIOS,
    isIpad,
    isIphoneX,
    isComputerBrower, // 电脑浏览器
    isWeixin, // 微信环境
    isWeixinMiniProgram, // 小程序环境
    isWeixinBrower, // 微信浏览器环境（android下无法判断）
    isAliPayMiniProgram // 支付宝小程序
  }
}
/**
 * url参数查询
 * @static
 * @param {String} url - url地址
 * @param {String} query - 查询参数
 */
export const getParams = (url: string = location.search, query: string) => {
  const paramStr = url.split('?')[1]
  const paramArr = paramStr && paramStr.split('&') || []
  const params: any = {}
  paramArr.forEach((param, i) => {
    const paramData = param.split('=')
    params[paramData[0]] = paramData[1]
  })
  return query ? params[query] : params
}
