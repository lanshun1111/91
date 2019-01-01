import { connect } from 'react-redux';
import store from '@/store';
import action from './action'
import UI from './UI';
import './home.scss';
const Com = connect(
  (state) => { // 給UI组件值
    // console.log('home', state)
    return {
      bannerlist: state.homedata.bannerlist,
      city: state.homedata.city,
      tablist: state.homedata.tablist,
      serverlist: state.homedata.serverlist,
      rushlist: state.homedata.rushlist,
      topline: state.homedata.topline,
      floor: state.homedata.floor,
      alldata: state.homedata.alldata,
      yourselect: state.homedata.yourselect
    }
  },
  (dispatch) => { // 响应UI组件的行为
    return {
      getData: () => {
        store.dispatch(action.getHomedata).then(() => {
          console.log('数据加载完毕')
        }).catch(() => {
          console.log('err')
        })
        store.dispatch(action.getHomedata2)
      },
      selectcity: () => {
        store.dispatch(action.getCity)
      }
    }
  }
)(UI);

export default Com;
