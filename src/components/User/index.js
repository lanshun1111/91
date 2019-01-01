import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Icon } from 'antd';
class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msg:false,
      login:'18126928248'
    }
  }
  backone () {
    this.props.history.go(-1);
  }
  gosetint () {
    console.log(1111)
    localStorage.setItem('login','')
    this.setState({
      msg:false
    })
  }

  componentDidMount () {
    let store = localStorage.getItem("login")
    if(store){
      this.setState({
        msg:true
      })
    } else {
      console.log(1111)
    }
  }
  render () {
    return (
      <div className = "userbox">
        {
          // 这是设置固定的地方
        }
        <div className="set">
          <div className="left-side">
           <i onClick={this.backone.bind(this)}><Icon type="left" theme="outlined" className='left-Icon'/></i>
          </div>
          <div className="center-side"></div>
          <div className="right-side" onClick={this.gosetint.bind(this)}>设置 <span></span></div>
        </div>
          {
            // 这是单纯的头部就是一张图片
          }
        <header className = "userheader"></header>
        {
          // 这是第一个白色部分 登陆 注册 和其他优惠券的地方的最大的盒子
        }
        <div className="member-box">
          {
            // 这是登陆 注册第二个盒子
          }
          <div className="log">
          {
            // 这是图片 个人头像 点击可以跳转的地方
          }
            <NavLink to='slefinformation'className="login">
              <img src="https://img2.ch999img.com//images/usericon.png.webp" alt="" className="logP"/>
            </NavLink>
            {
              // 这是根据状态管理器 没有登陆的时候显示的
            }
            <div className={this.state.msg === true ? 'doubleone' : 'login-loser'}>
              <NavLink to='/login' >登陆</NavLink>
              <span>|</span>
              <NavLink to='/register'>注册</NavLink>
            </div>
          {
            // 这是状态管理器  用户登陆的时候开始的
          }
            <div className={this.state.msg === true ? 'login-success' : 'doubleone'}>
                <p className="login-access1">{this.state.login}</p>
                <p className="login-access2"></p>
            </div>
            {
              // 这是 账户优惠券 积分九机币 跳转的地方
            }
            <div className="money">
              <NavLink to='/balance' className="moneyx"><span>0.00</span><p>账户余额</p></NavLink>
              <NavLink to='/Coupon' className="moneyx"><span>0</span><p>优惠券</p></NavLink>
              <NavLink to='integral' className="moneyx"><span>0</span><p>积分</p></NavLink>
              <NavLink to='/money' className="moneyx"><span>0</span><p>九机币</p></NavLink>
            </div>
          {
          // 第一个白色部分结束的 标志
          }
          </div>

          {
            //这是下一个白色地方开始的地方
          }
        </div>
        <div className="userContent">
          <div className="Code">
            <p>我的加单验证码</p>
            <span></span>
          </div>

          {
            //这是我订单
          }
          <div className="orderbox">
            <div className="ordertop">
              <p>我的订单</p>
              <NavLink to='/order' className="right-side">全部订单&nbsp;
              </NavLink>
            </div>

            {
              //订单的下部分
            }
            <div className="orderbottom">
              <NavLink to='/balance' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//914/447389adcb9432.png.webp" alt=""/></span><p>待付款</p></NavLink>
              <NavLink to='/Coupon' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//915/4473912d39fb35.png.webp" alt=""/></span><p>待收收货</p></NavLink>
              <NavLink to='integral' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//913/44739055eaacf8.png.webp" alt=""/></span><p>待评价</p></NavLink>
              <NavLink to='/money' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//918/44739a9473e9c9.png.webp" alt=""/></span><p>返修退换</p></NavLink>
            </div>
          </div>

          {
            // 这是维修
          }
          <div className="orderbox">
            <div className="ordertop">
              <p>维修|收藏</p>
            </div>

            {
              // 维修的下部分
            }
            <div className="orderbottom">
              <NavLink to='/balance' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//914/4473c05e669d4b.png.webp" alt="" /></span><p>维修订单</p></NavLink>
              <NavLink to='/money' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//913/472725f8b366de.png.webp" alt=""/></span><p>维修进度</p></NavLink>
              <NavLink to='/Coupon' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//913/4473b39369214d.png.webp" alt=""/></span><p>收藏商品</p></NavLink>
              <NavLink to='integral' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//916/472708a13758c8.png.webp" alt=""/></span><p>浏览记录</p></NavLink>
            </div>
          </div>

          {
            // 这是常用功能
          }
          <div className="orderbox">
            <div className="ordertop">
              <p>常用功能</p>
              <NavLink to='/order' className="right-side">更多功能&nbsp;
              </NavLink>
            </div>

            {
              // 常用功能的下半部分的下部分
            }
            <div className="orderbottom">
              <NavLink to='/balance' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//916/768e00042656d7.png.webp" alt=""/></span><p>我的预约</p></NavLink>
              <NavLink to='/money' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//914/44739756ec2296.png.webp" alt=""/></span><p>发票管理</p></NavLink>
              <NavLink to='/Coupon' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//916/44739b400f07e5.png.webp" alt=""/></span><p>会员俱乐部</p></NavLink>
              <NavLink to='integral' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//918/4473a611126380.png.webp" alt=""/></span><p>领券中心</p></NavLink>
            </div>
          </div>

          {
            //我的信息
          }
          <div className="messagesbox">
            <div className="messagestop">
              <p>我的信息</p>
            </div>

            {
              //信息的下部分
            }
            <div className="messagesbottom">
              <NavLink to='/balance' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//913/4473db238a2458.png.webp" alt=""/></span><p>信息管理</p></NavLink>
              <NavLink to='/Coupon' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//912/4473dc63809b2b.png.webp" alt=""/></span><p>账号绑定</p></NavLink>
              <NavLink to='integral' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//918/4473babb0ceb97.png.webp" alt=""/></span><p>收货地址</p></NavLink>
              <NavLink to='/money' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//912/447395564dac6b.png.webp" alt=""/></span><p>电子保修卡</p></NavLink>
              <NavLink to='integral' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//914/4473e1123dd86a.png.webp" alt=""/></span><p>支付密码</p></NavLink>
              <NavLink to='/money' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//916/4473948d3f55f0.png.webp" alt=""/></span><p>登录密码</p></NavLink>
              <NavLink to='/money' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//913/4473d91ba8c250.png.webp" alt=""/></span><p>我的小店</p></NavLink>
            </div>
          </div>

          {
            //这是联系我们
          }
          <div className="orderbox">
            <div className="ordertop">
              <p>联系我们</p>
            </div>

            {
              //订单的下部分
            }
            <div className="orderbottom">
              <NavLink to='/balance' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//913/4473d304c72e2a.png.webp" alt=""/></span><p>我的投诉</p></NavLink>
              <NavLink to='/Coupon' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//917/4473da1f5703ce.png.webp" alt=""/></span><p>我的咨询</p></NavLink>
              <NavLink to='integral' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//916/5a07f1fb7211be.png.webp" alt=""/></span><p>联系客服</p></NavLink>
              <NavLink to='/money' className="moneyx"><span><img src="https://img2.ch999img.com/newstatic//913/4473ae8da9169c.png.webp" alt=""/></span><p>商务合作</p></NavLink>
            </div>
          </div>



        </div>

      </div>
    )
  }
}

export default Com
