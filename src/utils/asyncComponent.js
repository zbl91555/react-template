// react-router 异步组建加载，代码分割
import React, { Component } from 'react'

// 该asyncComponent函数需要一个参数; 一个函数（importComponent），当被调用时会动态地导入给定的组件。当我们使用时，这会更有意义asyncComponent。
export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        component: null
      }
    }
    // 在componentDidMount，我们只需调用importComponent传递进来的功能。并保存动态加载组件的状态。
    async componentDidMount() {
      const { default: component } = await importComponent()

      this.setState({
        component: component
      })
    }
    // 最后，我们有条件地渲染组件，如果它已完成加载。如果不是，我们只是渲染null。但不是渲染null，你可以渲染一个加载微调器。这会给用户一些反馈，同时你的应用的一部分仍在加载。
    render() {
      const C = this.state.component

      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncComponent
}
