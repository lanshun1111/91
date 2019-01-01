import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Com extends Component {
  render () {
    return (
      <div className = "box">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => {this.props.history.go(-1)}}
        rightContent={[
          <Icon key="1" type="ellipsis" />
        ]}
        >
        购物车
      </NavBar>

      {
        //这是拿来的购物车
      }
      {
        // 上面是拿来的购物车代码
      }
      </div>
    )
  }
}

export default Com
