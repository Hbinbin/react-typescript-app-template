import React, { FC, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

// interface
interface IStateProps { // redux的state数据集中放在这里
}
interface IDispatchProps { // redux的action集中放在这里
}
interface IProps extends IStateProps, IDispatchProps { // 父组件的props集中放在这里
}
interface IState {
}

const My: FC<IProps> = ({ }) => {
  const initialState: IState = {
  }
  return (
    <div className=''>
      <h1>My</h1>
    </div>
  )
}

// connect
const mapStateToProps = (state: any) => {
  return {
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({}, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(My)
