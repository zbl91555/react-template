import React, { Component } from 'react'
import { getHttp, bind } from 'utils'
import { observer, inject } from 'mobx-react'
import { Icon } from 'antd'
import api from '../../service'
import './index.scss'

@getHttp
@inject('store')
@observer
@bind
export default class HomeComponent extends Component {
  state = {
    imgUrl: api.GET_RAND_BGIMG,
    random: 0
  }
  componentDidMount() {
    this.props.store.changeLoading(true)
    this.img.addEventListener('load', () => {
      this.props.store.changeLoading(false)
    })
  }
  handleClick() {
    console.log(this.state.random)
    this.props.store.changeLoading(true)
    this.setState({
      imgUrl: api.GET_RAND_BGIMG,
      random: Math.random()
    })
  }

  render() {
    return (
      <div className="home-container">
        <div className={`loading ${this.props.store.loading ? 'show' : ''}`} />
        <img
          ref={ref => {
            this.img = ref
          }}
          src={this.state.imgUrl + `?${this.state.random}`}
          width="100%"
          height="100%"
          alt="bing 图片"
        />
        <Icon type="sync" className="refresh-btn" onClick={this.handleClick} />
      </div>
    )
  }
}
