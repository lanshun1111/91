import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { NavLink } from 'react-router-dom';

class Com extends Component{
  constructor(porps) {
    super(porps)
    this.state = {
      msg:'这是登陆',
      showIMg: 'https://m.9ji.com/web/api/verifyImg/v1?w=90&h=30&UUID=16932758-cf47-416f-9cbc-c40b5fb5e675&v=375.044',
      showagin:'',
      showbK:true
    }
  }
  show () {
    console.log(111)
    let  show = this.state.showfooter ?   'block': 'none'
    this.setState({
      showfooter:!this.state.showfooter
    })
    this.refs.showfooter.style.display = show;
  }

  showIMg () {
    this.setState({
      showIMg: 'https://m.9ji.com/web/api/verifyImg/v1?w=90&h=30&UUID=16932758-cf47-416f-9cbc-c40b5fb5e675&v=375.044'
    })
  }
  changebackground () {
    this.setState({
      showbK:!this.state.showbK
    })
  }

  render () {
    return (
      <div className='register'>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {this.props.history.go(-1)}}
          rightContent={[
            <Icon key="1" type="ellipsis" />
          ]}
          >
          用户注册
          {
            // 这是下拉菜单的开关
          }
          <div className="loginswitch" onClick={ this.show.bind(this) }></div>
        </NavBar>
        {
          //下拉箭头
        }
        <div className='showfooter' ref='showfooter'>
          <ul>
            <NavLink  to = '/home'>首页</NavLink>
            <NavLink  to = '/kind'>分类</NavLink>
            <NavLink  to = '/cart'>购物车</NavLink>
            <NavLink  to = '/user'>我的</NavLink>
          </ul>
        </div>
        {
          //电话
        }
        <div className="TEL COMX">
          <span></span>
          <input type="text" placeholder="手机号码"/>
        </div>
        {
          //图片验证
        }
        <div className="PIC COMX">
          <span></span>
          <input type="text" placeholder="图片验证"/>
          <img src={this.state.showIMg} alt="" onClick={this.showIMg.bind(this)}/>
        </div>
        {
          //短信验证
        }
        <div className="MSG COMX">
          <span></span>
          <input type="text" placeholder="短信验证"/>
        </div>
        {
          //最后登陆部分
        }
        <div className="Told COMX">
          <span className= {
            this.state.showbK === true ? 'imgtold':'imgtold1'
          } onClick={this.changebackground.bind(this)} ref = 'changebackground'></span>
          <span>我已经阅读并同意</span>
          <a href="http://localhost:3000/#/register">《九机网用户协议》</a>
        </div>
        <div class="BUT COMX">
          <button>下一步</button>
        </div>
      </div>
    )
  }
}

export default Com
