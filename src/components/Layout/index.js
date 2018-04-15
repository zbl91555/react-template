import React, { Component, Children } from 'react'
import './index.scss'

export default class LayoutComponent extends Component {
  render() {
    return (
      <div className="layout-container">
        {Children.only(this.props.children)}
      </div>
    )
  }
}
