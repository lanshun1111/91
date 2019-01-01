import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { NavLink } from 'react-router-dom';

class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showagin:'',
      showbK:true,
      kProlist: [],
      index:0
    }
  }

  componentDidMount () {
    fetch('/9jiweb/api/products/category/v1').then(res=>res.json())
      .then(data => {
        this.setState({
          kProlist:data.data
        })
      })
  }


  show () {
    let  show = this.state.showfooter ?   'block': 'none'
    this.setState({
      showfooter:!this.state.showfooter
    })
    this.refs.showfooter.style.display = show;
  }

  changeClass (index) {
    console.log('我是点击',index)
    this.setState({
      index:index*1
    })
  }

  render () {
    console.log(this.state.kProlist)
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
          <input type="text" name=""/>
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
          //中心部分
        }
        <div className="Kcontent">
          {
            //这是列表栏开关
          }
          <div className="titleList">
            <div className="tile_side">
              <ul>
                {
                  this.state.kProlist.map((item,index) => {
                  return(
                  <li key={index} onClick={this.changeClass.bind(this,index)}
                  className={this.state.index === index ? 'active' : ''}>
                  {item.title}
                  </li>
                  )
                  })
                }
              </ul>
            </div>
          </div>
          {
            // 这是右边数据渲染栏
          }
          <div className="kProlistbox">
            {
              this.state.kProlist.map((item,index) => {
                if( this.state.index=== index){
                return (
                  <div className="xxx" key={index}>
                    <img src={item.picture} alt="" className='one'/>
                    {
                      this.state.kProlist.map((item1,index1) => {
                        if(this.state.index === index1){
                          return (
                            item1.children.map((a,b)=>{
                              return(
                                <div className="xx1" key={b}>
                                   <p className="xx1title">{a.title}</p>
                                   {
                                      a.children.map((c,d) => {
                                        return (
                                          <NavLink to={'/list/'+c.coll} key={d} className="picbox">

                                           <img src={c.picture} alt="" />
                                           <span>{c.title}</span>
                                          </NavLink>
                                        )
                                      })
                                   }
                                </div>
                              )
                            })
                          )
                        }else{return ''}
                      })
                    }
                  </div>
                  )
                }else{return ''}
              })
            }
          </div>
          {
            //下面是 中心部分闭合处
          }
        </div>
        {
          // 这是box的边界
        }
      </div>
    )
  }
}

export default Com
