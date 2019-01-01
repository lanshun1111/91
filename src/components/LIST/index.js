import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';

class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prolist:[],
      list: [],
      liIndex:0,
      flag:true,
      oflag:true
    }
  }

  componentDidMount () {
    console.log(1)
    const id = this.props.match.params.id
    console.log(id)
    fetch(`/9jiweb/api/products/v2?coll=${id}&keyword=&productId=0&page=1&inStock=0`).then(res=>res.json()).then(data=>{
      this.setState({
        prolist:data.data,
        list:data.data.product.list,
        flag:true
      })
    })
  }

  show () {
    console.log(111)
  }

  ico (liIndx) {
    console.log(this.refs.text);
  }
  changeC () {
    if(this.state.flag){
        this.refs.onLI.style.transform='rotate(180deg)'
        }else{
        this.refs.onLI.style.transform = "rotate(0)"
        }
        this.setState({
          flag : !this.state.flag
        })
  }

  pirce () {
    var brr = []
    if (this.state.oflag) {
      brr =  this.state.list.sort( (a,b) => {
        return a.price - b.price
      })
    } else {
       brr =  this.state.list.sort( (a,b) => {
        return b.price - a.price
      })
    }
    this.setState({
      list:brr,
      oflag:!this.state.oflag
    })
  }


  render () {
    return (
      <div className="box">
        {
          //头部搜索
        }
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {this.props.history.go(-1)}}
          rightContent={[
            <Icon key="1" type="ellipsis" />
          ]}
          >
          <input type="text" name="" className='search' placeholder="iPhone xs"/>
          {
            // 这是下拉菜单的开关
          }
          <div className="loginswitch" onClick={ this.show.bind(this) }></div>
        </NavBar>
        {
          //第二部分筛选
        }
        <div className="commscss header-select">
          <ul className="selectop">
            <li ref='text' onClick={this.changeC.bind(this)}>
              <p>综合</p>
              <i ref='onLI'></i>
            </li>
            <li onClick={this.pirce.bind(this)}>
              <p>价格</p>
              <i></i>
            </li>
            <li>
              <p>新品优先</p>
              <i></i>
            </li>
            <li onClick={this.ico.bind(this,2)}>
              <p>筛选</p>
              <i></i>
            </li>
          </ul>
        </div>

        {
          //第三部分这是列表部分
        }
        <div className="list">
          {
            this.state.list.map((item,index) => {
              return (
              <NavLink to={'/detail/'+item.ppid} className='list-item' key={index}>
                {
                  //这是左边图片
                }
                <div className="list-left">
                  <img src={item.imagePath} alt=""/>
                  <div className={item.productStatus.text ? 'ni':''}>
                      {item.productStatus.text}
                  </div>
                </div>

                {
                  //这是右边
                }
                <div className='list-right'>
                  <div className="list-name mt-5">
                    <p className='lines-1'>
                      { item.name }
                    </p>
                  </div>
                  <div className='product-tag mt-5'>
                    <ul>
                      <li className="tag-item">{item.tag[0]}</li>
                      <li className="tag-item">{item.tag[1]}</li>
                      <li className="tag-item">{item.tag[2]}</li>
                      <li className="tag-item">{item.tag[3]}</li>
                    </ul>
                  </div>

                  <div className='price mt-5'>
                    <b className={item.price ? '' : 'no'}>￥{item.price}</b>
                  </div>

                  <div className='product-stage mt-5'>
                    <span className='tag-text'>分期</span>
                    <span className="grey-9 font-12">{item.installment}</span>
                  </div>

                  <div className='mt-5 grey-9 font-12 assess'>
                    <span className="ml-5">{item.commentCount}人评价</span>
                    <span className={item.praiseRate? "ml-5":'no'}>好评率第{item.praiseRate}</span>
                    <NavLink to='/'>
                      <span>{item.rank.text}</span>
                      <i></i>
                    </NavLink>
                  </div>

                  <div className="link-box mt-5">
                    <NavLink to ='/' className={item.secondHand.price ? 'tag-link lines-1':'no'}>
                      二手良品 ￥{item.secondHand.price}
                    </NavLink>
                  </div>
                </div>
              </NavLink>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Com
