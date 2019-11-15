import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { SwipeAction, List, Button } from 'antd-mobile'
import '@css/hello.css'

class Hello extends Component {
  constructor (props: any) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className='hello'>
        <h2>Lying on the beach</h2>
      </div>
    )
  }
}
export default Hello
