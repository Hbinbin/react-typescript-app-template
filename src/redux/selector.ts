import { createSelector } from 'reselect';

// 用户信息
export const getUserInfo = createSelector(
  [
    (state: any, props: any) => state.user.name,
    (state: any, props: any) => state.user.mobile
  ],
  (name: string, mobile: string) => {
    return `${name}：${mobile}`;
  }
);
