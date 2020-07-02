import update from 'immutability-helper'
import { Dispatch } from 'redux'

// types
const USER = 'USER'

// interface
interface IInitState {
  user: IUser;
}

// state
const initState: IInitState = {
  user: {} as IUser
}

// actions
/** 设置菜单选择的角色 */
export function setUser (userInfo: IUser) {
  return {
    type: USER,
    payload: userInfo
  }
}

// reducer
export default function user (state = initState, action: { type: string; payload: any }): IInitState {
  switch (action.type) {
    case USER:
      return update(state, {
        user: {
          $set: action.payload
        }
      })
    default:
      return state
  }
}
