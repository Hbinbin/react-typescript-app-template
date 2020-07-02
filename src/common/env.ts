
// 全局API域名配置
export default class ENV {
  static readonly env: 'dev' | 'bts' | 'prd' = 'dev'
}

window.ENV = ENV
