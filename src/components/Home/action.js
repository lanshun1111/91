import { Toast } from 'antd-mobile';
import axios from 'axios';
const action = {
  getHomedata: (dispatch) => {
    return new Promise((resolve, reject) => {
      Toast.loading();
      const url = '/9ji/web/api/floors/v1?label=0&page=1&random=0';
      axios.get(url).then(res => {
            Toast.hide();
            dispatch({
              type: 'CHANGE_ALLDATA',
              data: res.data.data
            });
            dispatch({
              type: 'CHANGE_BANNER',
              data: res.data.data.container.floor[0].content
            });
            dispatch({
              type: 'CHANGE_TABLIST',
              data: res.data.data.label
            });
            dispatch({
              type: 'CHANGE_SERVERLIST',
              data: res.data.data.container.floor[3].content
            });
            dispatch({
              type: 'CHANGE_TOPLINE',
              data: res.data.data.container.floor[6].content
            });
            resolve()
      }).catch(err => {
        console.log(err)
        reject()
      })
    })
  },
  getHomedata2: (dispatch) => {
    const url = '/9ji/web/api/floors/specialEnjoy/v1';
    axios.get(url).then(res => {
      dispatch({
        type: 'CHANGE_RUSHLIST',
        data: res.data.data.rushToday
      })
      dispatch({
        type: 'CHANGE_YOURSELECT',
        data: res.data.data.optimize
      })
    }).catch(err => console.log(err))
  },
  getCity: (dispatch) => {
    dispatch({
      type: 'CHANGE_CITY',
      data: "北京"
    })
  }
}

export default action
