import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

// interface
interface IActions{ // redux的action集中放在这里
}
interface IProps{
  actions: IActions;
}
interface IState{
}

function Name (props: IProps) {
  const state: IState = {
  }
  return (
    <div className=''>
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
    actions: bindActionCreators({}, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Name)