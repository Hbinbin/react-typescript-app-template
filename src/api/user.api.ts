import axios from 'axios';
import { IGetUserParams } from '@typings/api.typing';

export default class UserAPI {
  /** 获取用户信息API */
  private static readonly USER_API = 'IAccountRoles/getUser';
  /**
   * 获取用户信息
   * @static
   * @param {string} mobile - 用户手机号
   */
  static async getUser ({ mobile }: IGetUserParams) {
    const url = 'xxxx' + this.USER_API;
    const params = {
      mobile
    };
    return axios.post(url, params);
  }
}
