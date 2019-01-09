/*
 * @Author: 徐长剑
 * @Description: vuex 设置state文件文件
 * @Date: 2018-08-27 13:49:09
 * @Last Modified time: 2018-08-27 13:49:09
 */
import MutationsType from './type'

export default {

  // 设置登陆信息
  // [MutationsType.SET_TOKEN](state, data) {
  //    return state.users.isLogin = data;
  // },
  [MutationsType.SET_SIDERBAR_TOGGLE](state) {
    state.sidebar.opened = !state.sidebar.opened
  }
}
