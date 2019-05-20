import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Button } from 'antd-mobile'

// @connect(
//   state => state,
//   {}
// )
class Hello extends Component {
  constructor (props:any) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Button>123</Button>
      </div>
    )
  }
}
export default Hello
