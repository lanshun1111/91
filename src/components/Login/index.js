import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { NavLink } from 'react-router-dom';

class Com extends Component{
    constructor(porps) {
      super(porps)
      this.state = {
        msg:'这是登陆',
        showfooter:true,
        showSeleteLogin:true
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

  showSeleteLogin (a) {
    this.setState({
      showSeleteLogin: a
    })
    if(a){
      this.refs.LoginD.style.color = ''
      this.refs.loginZ.style.color = 'red'
    }
    if(!a){
      this.refs.loginZ.style.color = ''
      this.refs.LoginD.style.color = 'red'
    }
  }
  login () {
    localStorage.setItem('login','ok')
    this.props.history.push('/kind')
  }
  sendMessage () {

  }
  render () {
    return (
      <div className='Login'>
        {
          // 这是头部
        }
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {this.props.history.go(-1)}}
          rightContent={[
            <Icon key="1" type="ellipsis" />
          ]}
          >
          登陆
          {
            // 这是下拉菜单的开关
          }
          <div className="loginswitch" onClick={ this.show.bind(this) }></div>
        </NavBar>
        {
          // 这是点击事件后 出现的跳转的页面showfooter
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
          //这是登陆
        }

        <div className="selectLoginModle">
          <div className="kong">
            <div className='oneC comModle' onClick = {this.showSeleteLogin.bind(this,true)} ref = 'loginZ'>账号密码登陆</div>
            <div className="threeC comModle">|</div>
            <div className="twoC comModle"onClick = {this.showSeleteLogin.bind(this,false)} ref='LoginD'>短信验证登录</div>
          </div>
        </div>
        {
          // 这是登陆方式的选择开关
        }
        <div className="showLoginModle">
          <div className="username commonSLG">
            <span></span>
            <input type="text" placeholder={this.state.showSeleteLogin === true? '用户名/手机号':'手机号码' } />
          </div>
          <div className="password commonSLG">
            <span className='passwordimg'></span>
            <input type="password"  placeholder= {this.state.showSeleteLogin === true? '请输入密码':'动态密码'} />
            <span className={this.state.showSeleteLogin === true? 'close':'open'} onClick= {this.sendMessage.bind(this)}>获取验证码</span>
          </div>
          <div className="nopassword commonSLG">
           <span>三月内免登陆</span>
           <span>
           </span>
          </div>
        </div>
        {
          //这是登陆按钮
        }
        <div className="LoginBTN">
          <button onClick={this.login.bind(this)}>登录</button>
        </div>
        {
          // 这是忘记密
        }
        <div className="f-r commonSLG">
          <span onClick={()=>this.props.history.push('/register')}>新用户注册</span>
          <span>忘记密码</span>
        </div>
        {
          // 三方登录
        }

        <div className="otherM"><i></i>
             <p>第三方登录</p>
        </div>
        <div className="otherImg">
          <i></i>
        </div>
      </div>
    )
  }
}

export default Com
