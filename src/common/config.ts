
/** 项目全局配置 */
export default class Config implements IConfig {
  /** 开发环境 */
  static readonly ENV = 'dev';
  /** 当前渠道 */
  static readonly CHANNEL = 'mall';
}
window.Config = Config;
