import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

// interface
interface IActions{ // redux的action集中放在这里
}
interface IProps{
  actions: IActions;
}
interface IState{
}

function Name (props: IProps) {
  console.log(1111);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log('count: ', count);
      setCount(count + 1); // 这个 effect 依赖于 `count` state
    }, 1000);
    return () => clearInterval(id);
  }, [count]); // 🔴 Bug: `count` 没有被指定为依赖

  return <h1>{count}</h1>;
}

// connect
const mapStateToProps = (state: any) => {
  return {
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Name);
