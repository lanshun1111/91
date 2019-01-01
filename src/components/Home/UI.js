import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import Swiper from '@/common/Swiper';
import { Carousel } from 'antd-mobile';
import top from '@/tool/images/top.png'

class Com extends Component {
  componentDidMount () {
    this.props.getData()
  }
  render () {
    console.log('props', this.props.yourselect)
    return (
      <div className = "box">

      {/* 头部地址及搜索 */}
          <header className = "homeheader">
            <p className="selectcity" onClick={ this.props.selectcity } >
            { this.props.city  }
            {<Icon type="down" size='xxs' style={{ marginRight: '16px' }} />}
            </p>
            <div className="searchbox">
              <Icon type="search" />
              <p>iPhone XS</p>
            </div>
          </header>


          {/* 头部以下 */}
        <div className="content">

        {/* 轮播图，利用组件 */}
          <Swiper bannerlist = { this.props.bannerlist} />

          {/*  服务图标*/}
          <ul className="severtitle">
            {
              this.props.serverlist.map((item,index) => (
                <li key={ index }>
                  <img src={ item.imagePath } alt="" />
                </li>
              ))
            }
          </ul>

          {/* 限时购 */}
          <div className="rushToday">
            <div className="timerstart">
              <p>每天10:00开始</p>
            </div>
            {
              //限时购的右边 -- 就是图片整合
            }
            <div className="rushlist">
              <div className="rushcontent">
                <Carousel
                  autoplay={false}
                  dots={false}
                >
                  {this.props.rushlist.map((item, index) => (
                    <div
                      key={ index }
                      style={{ display: 'flex', width: '100%', height: '0.94rem' }}
                      className="rushlbox"
                    >
                      <img
                        src={ item.imagePath }
                        alt=""
                        style={{ width: '0.7rem', verticalAlign: 'top', height: '0.7rem' }}
                        onLoad={() => {
                          // fire window resize event to change height
                          window.dispatchEvent(new Event('resize'));
                        }}
                      />
                      <div className="rushtitle" >
                        <p className="title1">{ item.name }</p>
                        <p className="title2">{ item.description }</p>
                        <p className="price"style={{ color: 'red' }}>￥{ item.price }</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

          {/* 九机头条 */}

          <div className="floorTops">
            <img src={ top } alt="" />
            <Carousel className="myCarousel"
              vertical
              dots={false}
              dragging={false}
              swiping={true}
              autoplay
              infinite
              speed={800}
              autoplayInterval={800}
              resetAutoplay={false}
            >
              {this.props.topline.map(type => (
                <div className="vItem" key={type.id}>{type.title}</div>
              ))}
            </Carousel>
          </div>

          {/*  新品推荐*/}
          <div className="newgoods">
            <div className="newgoods1" style={{display: 'flex',}}>
            {
              this.props.floor.map((item, index) => {
                if (index === 7 ) {
                  var newgoods1 = item.content.map((itm) => {
                    return (<div key = {itm.id}>
                      <img src={ itm.imagePath } alt=""  style={{ width: '100%', height: '1rem' }} />
                      </div>)
                  })
                }
                return newgoods1
              })
            }
            </div>
            <div className="newgoods2" style={{display: 'flex',}}>
            {
              this.props.floor.map((item, index) => {
                if (index === 8 ) {
                  var newgoods1 = item.content.map((itm) => {
                    return (<div key = {itm.id}>
                      <img src={ itm.imagePath } alt=""  style={{ width: '100%', height: '1rem' }} />
                      </div>)
                  })
                }
                return newgoods1
              })
            }
            </div>
            <div className="newgoods3" style={{display: 'flex',}}>
            {
              this.props.floor.map((item, index) => {
                if (index === 9 ) {
                  var newgoods1 = item.content.map((itm) => {
                    return (<div key = {itm.id}>
                      <img src={ itm.imagePath } alt=""  style={{ width: '100%', height: '0.54rem' }} />
                      </div>)
                  })
                }
                return newgoods1
              })
            }
            </div>
          </div>


          {/*  为你优选*/}
          <div className="yourselect">

          {/* 标题部分 */}
            <div className="selecttitle">
            {
              this.props.floor.map((item, index) => {
                if (index === 10 ) {
                  return (<img src={ item.content[0].imagePath } alt="" style={{ width: '100%', height: '0.38rem' }} key={index} />)
                }
                return ""
              })
            }
            </div>
            {/* 商品部分 */}
            <ul className="optimizebox">
              {
                this.props.yourselect.map((item, index) =>  (
                  <li key={ index }>
                    <img src={ item.imagePath } alt=""  style={{width: '1.2rem',height: '1.2rem' }} />
                    <p className="title1">{ item.title }</p>
                    <p className="sellingPoint">{ item.sellingPoint }</p>
                    <p className="price">￥{ item.price }</p>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* 手机精品 */}
          <div className="phonetop">

          {/* 标题部分 */}
            <div className="phonetoptitle">
            {
              this.props.floor.map((item, index) => {
                if (index === 12 ) {
                  return (<img src={ item.content[0].imagePath } alt="" style={{ width: '100%', height: '0.38rem' }} key={index} />)
                }
                return ""
              })
            }
            </div>
            {/* 商品部分 */}
            <div className="phonetop1" style={{display: 'flex',}}>
            {
              this.props.floor.map((item, index) => {
                if (index === 13 ) {
                  var newgoods1 = item.content.map((itm) => {
                    return (<div key = {itm.id}>
                      <img src={ itm.imagePath } alt=""  style={{ width: '100%', height: '1rem' }} />
                      </div>)
                  })
                }
                return newgoods1
              })
            }
            </div>
            <div className="phonetop1" style={{display: 'flex',}}>
            {
              this.props.floor.map((item, index) => {
                if (index === 14 ) {
                  var newgoods1 = item.content.map((itm) => {
                    return (<div key = {itm.id}>
                      <img src={ itm.imagePath } alt=""  style={{ width: '100%', height: '1rem' }} />
                      </div>)
                  })
                }
                return newgoods1
              })
            }
            </div>
            <div className="phonetop1" style={{display: 'flex',}}>
            {
              this.props.floor.map((item, index) => {
                if (index === 15 ) {
                  var newgoods1 = item.content.map((itm) => {
                    return (<div key = {itm.id}>
                      <img src={ itm.imagePath } alt=""  style={{ width: '100%', height: '0.54rem' }} />
                      </div>)
                  })
                }
                return newgoods1
              })
            }
            </div>
          </div>


          {/* 办公专家 */}
          <div className="phonetop">

          {/* 标题部分 */}
            <div className="phonetoptitle">
            {
              this.props.floor.map((item, index) => {
                if (index === 16 ) {
                  return (<img src={ item.content[0].imagePath } alt="" style={{ width: '100%', height: '0.38rem' }} key={index} />)
                }
                return ""
              })
            }
            </div>
            {/* 商品部分 */}
            <div className="phonetop1" style={{display: 'flex',}}>
            {
              this.props.floor.map((item, index) => {
                if (index === 17 ) {
                  var newgoods1 = item.content.map((itm) => {
                    return (<div key = {itm.id}>
                      <img src={ itm.imagePath } alt=""  style={{ width: '100%', height: '1rem' }} />
                      </div>)
                  })
                }
                return newgoods1
              })
            }
            </div>
            <div className="phonetop1" style={{display: 'flex',}}>
            {
              this.props.floor.map((item, index) => {
                if (index === 18 ) {
                  var newgoods1 = item.content.map((itm) => {
                    return (<div key = {itm.id}>
                      <img src={ itm.imagePath } alt=""  style={{ width: '100%', height: '1rem' }} />
                      </div>)
                  })
                }
                return newgoods1
              })
            }
            </div>
            <div className="phonetop1" style={{display: 'flex',}}>
            {
              this.props.floor.map((item, index) => {
                if (index === 19 ) {
                  var newgoods1 = item.content.map((itm) => {
                    return (<div key = {itm.id}>
                      <img src={ itm.imagePath } alt=""  style={{ width: '100%', height: '0.54rem' }} />
                      </div>)
                  })
                }
                return newgoods1
              })
            }
            </div>
          </div>


          {/* 智能生活 */}
          <div className="ailive">

          {/* 标题部分 */}
            <div className="ailivetitle">
            {
              this.props.floor.map((item, index) => {
                if (index === 20 ) {
                  return (<img src={ item.content[0].imagePath } alt="" style={{ width: '100%', height: '0.38rem' }} key={index} />)
                }
                return ""
              })
            }
            </div>
            {/* 商品部分 */}
            <div className="phonetop1" style={{display: 'flex',}}>
            {
              this.props.floor.map((item, index) => {
                if (index === 21 ) {
                  var newgoods1 = item.content.map((itm) => {
                    return (<div key = {itm.id}>
                      <img src={ itm.imagePath } alt=""  style={{ width: '100%', height: '1rem' }} />
                      </div>)
                  })
                }
                return newgoods1
              })
            }
            </div>
            <div className="phonetop1" style={{display: 'flex',}}>
            {
              this.props.floor.map((item, index) => {
                if (index === 22 ) {
                  var newgoods1 = item.content.map((itm) => {
                    return (<div key = {itm.id}>
                      <img src={ itm.imagePath } alt=""  style={{ width: '100%', height: '0.54rem' }} />
                      </div>)
                  })
                }
                return newgoods1
              })
            }
            </div>
          </div>


          {/* 发现好货 */}
          <div className="findgoods">

          {/* 标题部分 */}
            <div className="findgoodstitle">
              {
                this.props.floor.map((item, index) => {
                  if (index === 23 ) {
                    return (<img src={ item.content[0].imagePath } alt="" style={{ width: '100%', height: '0.38rem' }} key={index} />)
                  }
                  return ""
                })
              }
              </div>
              {/* 商品部分 */}
              <div className="findgoods1" style={{display: 'flex',}}>
              {
                this.props.floor.map((item, index) => {
                  if (index === 24 ) {
                    var newgoods1 = item.content.map((itm) => {
                      return (<div key = {itm.id} className="goodslist" style={{ width: '49%', height: '2.25rem' }}>
                        <img src={ itm.imagePath } alt=""  style={{ width: '1.28rem', height: '1.28rem' }} />
                        <p className="sellingPoint">{ itm.sellingPoint }</p>
                        <p className="title">{ itm.title }</p>
                        <p className="price">￥{ itm.price }</p>
                        </div>)
                    })
                  }
                  return newgoods1
                })
              }
              {
                this.props.floor.map((item, index) => {
                  if (index === 25 ) {
                    var newgoods1 = item.content.map((itm,s) => {
                      return (<div key = {s} className="goodslist" style={{ width: '49%', height: '2.25rem' }}>
                        <img src={ itm.imagePath } alt=""  style={{ width: '1.28rem', height: '1.28rem' }} />
                        <p className="sellingPoint">{ itm.sellingPoint }</p>
                        <p className="title">{ itm.title }</p>
                        <p className="price">￥{ itm.price }</p>
                        </div>)
                    })
                  }
                  return newgoods1
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com
