import React, { Component } from 'react'
import { NavBar, Icon, Carousel } from 'antd-mobile';
import {Link} from 'react-router-dom'

class Com extends Component {
  constructor(porps) {
    super(porps)
    this.state = {
      list: {},
      pic: [],
      tags:[],
      params:[],
      commont:[],
      buyswitch: false
    }
  }
  show () {
    let  show = this.state.showfooter ?   'block': 'none'
    this.setState({
      showfooter:!this.state.showfooter
    })
    this.refs.showfooter.style.display = show;
  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch('/9ji/web/api/sc/products/getDetailStatic/v1?ppid='+id)
      .then(res=>res.json())
        .then(data => {
          this.setState({
            list: data.data,
            pic:data.data.pictures,
            tags: data.data.tags,
            params:data.data.params,
            commont:data.data.comment.list
          })
          console.log(this.state.commont)
        }).catch(err=>console.log(err))
  }

  buy () {
    if(this.state.buyswitch){
      this.refs.buy.style.bottom='-100%'
      this.refs.allmask.style.display='none';
    }else {
      this.refs.buy.style.bottom='0';
      this.refs.allmask.style.display='block';
    }
    this.setState({
      buyswitch:!this.state.buyswitch
    })
  }
  render () {
    let arrT = []
    if( this.state.tags.length > 0 ){
      console.log(this.state.tags)
      this.state.tags.map((item,index)=>{
        return arrT.push(
          <span key={index}>{item}</span>
        )
      })
    }
    return (
    <div className="detailbox">
      <div className='DEheader'>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {this.props.history.go(-1)}}
          rightContent={[
            <Icon key="1" type="ellipsis" />
          ]}
          >
          <span className='detailtop'>商品</span>
          <span className='detailtop'>详情</span>
          <span className='detailtop'>评论</span>
          <span className="sildx"></span>
          {
            // 这是下拉菜单的开关
          }
          <div className="loginswitch" onClick={ this.show.bind(this) }></div>
        </NavBar>
      </div>
      <div className="DEcontent">
        <div className="detailpicbox">
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.pic.map((item, index) => (
              <div
                key={ index }
                style={{ display: 'inline-block', height: '349px' }}
              >
                <img
                  src={ item }
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                  }}
                />
              </div>
            ))}
          </Carousel>
          <div>
            <p>
              {this.state.list.productName}
              {this.state.list.skuName}
              {
                arrT
              }
            </p>
          </div>
          <p className='P_color'>{this.state.list.profile}</p>
          <p className='P_color1'>￥{this.state.list.price}</p>
          <div className="Dmask">
            <ul>
            <li>价格走势</li>
            <li>降价通知</li>
            <li>机型</li>
            <li>开箱展示</li>
            </ul>
          </div>
        </div>

        <div className="DCpic">
          <div className='DC-left'>
            <p>规格</p>
          </div>
          <div className="DC-right">
            <div className='right_pic'>
              {
                 this.state.params.map((item,index) => {
                   return (
                   <div className='right_picx' key={index}>
                       <img src={item.imgPath} alt=""/>
                       <p className="key text">{item.key}</p>
                       <p className="val text">{item.value}</p>
                   </div>
                   )
                 })
              }
            </div>
          </div>
        </div>

        <div className="DEmeal">
          <div>
            <span>优惠套餐</span>
            <span>购买组合最高省25.0元</span>
          </div>
        </div>
        <div className="DEmeal">
          <div>
            <span>销量</span>
            <span>1名</span>
          </div>
        </div>

        <div className='Comment'>
          <div className='ComBox'>
            <div className='h-scroll-wrap'>
              {
                this.state.commont.map((item,index) => {
                  return (
                  <div className='h-scroll-item comment-item' key={index}>
                    <div className='comment-header flex'>
                      <div className="avatar-box">
                        <img src={item.avatar} alt=""/>
                      </div>
                      <div className='flex-child-average padding-left'>
                        <div className='flex flex-justify-between'>
                          <span>{item.userName}</span>
                          <span className='grey-9'>{item.commentTime}</span>
                        </div>
                        <div className='stars'>
                        </div>
                      </div>
                    </div>
                    <div className='comment-content'>{item.content}</div>
                    <div className='comment-img-list'>
                      <div className='img-list-inner'>
                        <div className='img-box pointer'>
                          <img src={item.pictures[0]} alt=""/>
                        </div>
                      </div>
                    </div>
                    <div className='comment-foot'>
                      <div className="ok"><i>点赞</i></div>
                      <div className='num'><i>评论数{item.replyCount}</i></div>
                    </div>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        {
          // <div className='Comment_swip'>
          // <span>yonghu</span>
          // <span> chaoai</span>
          // </div>
      }

        {
        //   <div className="CMMB">
        //   <span>全部评论</span>
        //   <span>购买咨询</span>
        // </div>
        //
        // <div className='question'>
        //   <span>问大家</span>
        //   <span>暂无文体</span>
        //   <div className="Line"></div>
        //   <div className='ansewer'></div>
        // </div>
      }

        <div className="like">
        {
          //  <ul>
          //   <li>才喜欢</li>
          //   <li>排行榜</li>
          //   <li>推荐配件</li>
          // </ul>
          // {
          //   //line是分割线
          // }
          // <div className="Line"></div>
          // <div className='likePic'>
          //   <img src="https://img2.ch999img.com/pic/product/440x440/20180929105231555.png.webp" alt=""/>
          //   <img src="https://img2.ch999img.com/pic/product/440x440/20180929105231555.png.webp" alt=""/>
          //   <img src="https://img2.ch999img.com/pic/product/440x440/20180929105231555.png.webp" alt=""/>
          // </div>
        }
        </div>


      <div className='DEdetails'></div>
        {
        //   <ul>
        //   <li>图文详情</li>
        //   <li>详情参数</li>
        //   <li>售后保障</li>
        // </ul>
        // <div className='picDE'>
        //   <img src="https://img2.ch999img.com/pic/product/440x440/20180929105231555.png.webp" alt=""/>
        //   <img src="https://img2.ch999img.com/pic/product/440x440/20180929105231555.png.webp" alt=""/>
        //   <img src="https://img2.ch999img.com/pic/product/440x440/20180929105231555.png.webp" alt=""/>
        // </div>
      }
      </div>
      <div className='DEfoot'>
        <div className='DEfoot_left'>
          <div className='L_left'>
            <i className="ico1"></i>
            <p>客服</p>
          </div>
          <div className='L_left'>
            <i className="ico2"></i>
            <p>收藏</p>
          </div>
          <div className='L_left'>

            <i className="ico3">
              <span>1</span>
            </i>
            <p>购物车</p>
          </div>
        </div>
        <div className="DEfoot_center">
          加入购物车
        </div>
        <div className="DEfoot_right" onClick={this.buy.bind(this)} >
          立即购买
        </div>
        <div className='buy' ref='buy' >
            <div className='buytop'>
              <div className='buytop_left'>
                <img src={this.state.pic[0]} alt="" width='118'height="118"/>
              </div>
              <div className="buytop_right">
                <p className='P_color'>￥{this.state.list.price}</p>
                <p className="NUM">商品编码 ：{this.state.list.ppid}</p>
                <span className="close" onClick={this.buy.bind(this)}></span>
              </div>
            </div>
            <div className='buyConent'></div>
            <Link className='buyfootbox' to='/buy'>
              <div className='buyfoot'>点击购买</div>
            </Link>
        </div>
      </div>

      <div className="allmask" ref = 'allmask'></div>


    </div>
    )
  }
}

export default Com
