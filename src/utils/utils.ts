/** 获取当前开发环境 */
export function getEnv () {
  return {
    isDebug: localStorage.getItem('isDebug') === '1',
    isDev: process.env.NODE_ENV === 'development', // 本地开发环境
    isPrd: process.env.NODE_ENV === 'production' // 生产环境
  };
}
/** 获取当前系统信息 */
export function getPlatform () {
  const ua = navigator.userAgent.toLowerCase();
  const sysPlatform = navigator.platform.toLowerCase();
  const isIpad = ua.includes('ipad');
  const isAndroid = ua.includes('android');
  const isIOS = ua.includes('iphone os');
  const isIphoneX = isIOS && (screen.height >= 812 && screen.width >= 375);
  const isWeixin = ua.includes('micromessenger');
  const isWeixinMiniProgram = isWeixin && ua.includes('miniprogram') || window.__wxjs_environment === 'miniprogram';
  const isWeixinBrower = isWeixin && !isWeixinMiniProgram || window.__wxjs_environment === 'browser';
  const isComputerBrower = sysPlatform.includes('win') || sysPlatform.includes('mac');
  const isAliPayMiniProgram = ua.includes('alipayclient');
  return {
    isAndroid,
    isIOS,
    isPhone: isAndroid || isIOS,
    isIpad,
    isIphoneX,
    isComputerBrower, // 电脑浏览器
    isWeixin, // 微信环境
    isWeixinMiniProgram, // 微信小程序环境
    isWeixinBrower, // 微信浏览器环境（android下无法判断）
    isAliPayMiniProgram // 支付宝小程序
  };
}

/**
 * url参数查询
 * @param {string} [url=location.search] - url地址
 * @param {string} [query] - 查询参数
 * @param {boolean} [decode=true] - 返回的查询值是否需要解码
 * @returns {object|string}
 */
export const getParams = ({ url = location.search, query, decode = true }: { url?: string; query?: string; decode?: boolean } = {}) => {
  const paramStr = url.split('?')[1];
  const paramArr = paramStr && paramStr.split('&') || [];
  const params: any = {};
  paramArr.forEach((param, i) => {
    const paramData = param.split('=');
    params[paramData[0]] = decode ? decodeURIComponent(paramData[1]) : paramData[1];
  });
  return query ? params[query] : params;
};

/**
 * url添加参数
 * @param {string} url - 需要添加参数的url
 * @param {object} params - 添加的参数，参数是'key:value'形式
 * @param {boolean} [encode=false] - 返回的url是否需要编码
 * @returns {string}
 */
export function addParams ({ url = '', params = {}, encode = false }: { url?: string; params: object; encode?: boolean}) {
  if (!Object.keys(params).length) {
    return url;
  }
  url = decodeURIComponent(url);
  const [hostStr, searchStr] = url.split('?');
  if (url.includes('?')) {
    const oldParams = {};
    searchStr.split('&').forEach(val => {
      const newVal = val.split('=');
      oldParams[newVal[0]] = newVal[1];
    });
    // 合并、去重参数
    params = { ...oldParams, ...params };
  }
  let [paramsStr, i] = ['', 1];
  for (const [key, val] of Object.entries(params)) {
    paramsStr += i > 1 ? `&${key}=${val}` : `${key}=${val}`;
    i++;
  }
  const baseUrl = `${hostStr}?${paramsStr}`;
  return encode ? encodeURIComponent(baseUrl) : baseUrl;
}
