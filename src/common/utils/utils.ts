/** 获取当前开发环境 */
export function getEnv () {
  const { env } = ENV
  return {
    isDebug: localStorage.getItem('isDebug') === '1',
    isDev: process.env.NODE_ENV === 'development', // 本地开发环境
    isPrd: process.env.NODE_ENV === 'production', // 生产环境
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
 * 深克隆
 * @static
 * @param {Object|Array} obj - 引用类型Object、Array
 * @returns {Object|Array}
 */
export const deepClone = (obj: any) => {
  if (obj === null) return null
  const clone = Object.assign({}, obj)
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  )
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
      ? Array.from(obj)
      : clone
}
