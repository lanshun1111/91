const data = (state = {
  bannerlist: [],
  city: '深圳市',
  tablist: [],
  serverlist: [],
  rushlist: [],
  topline: [],
  yourselect: [],
  floor: [],
  alldata: ''
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CHANGE_ALLDATA':
      return {...state, alldata: data,floor: data.container.floor}
    case 'CHANGE_BANNER':
      return {...state, bannerlist: data} // 简写形式
    case 'CHANGE_CITY':
      return {...state, city: data}
    case 'CHANGE_PROLIST':
      return Object.assign({}, state, {prolist:data})
    case 'CHANGE_TABLIST':
      return {...state, tablist: data}
    case 'CHANGE_SERVERLIST':
      return {...state, serverlist: data}
    case 'CHANGE_RUSHLIST':
      return {...state, rushlist: data}
    case 'CHANGE_TOPLINE':
      return {...state, topline: data}
    case 'CHANGE_YOURSELECT':
      return {...state, yourselect: data}
    default:
      return state
  }
}

export default data;
