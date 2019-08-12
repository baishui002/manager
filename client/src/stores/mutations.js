



import { SET_AUTHENTICATED, SET_USER } from './mutations-types'

export default {
    // 设置认证状态
    [SET_AUTHENTICATED](state, isAuthenticated) {
        if(isAuthenticated) state.isAuthenticated = isAuthenticated
        else state.isAuthenticated = false
    },
    // 设置user信息
    [SET_USER](state, user) {
        if (user) state.user = user
        else user = {}
    }
}