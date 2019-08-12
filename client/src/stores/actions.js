import { SET_AUTHENTICATED, SET_USER } from './mutations-types'

export default {
    // 提交认证状态
    setAuthenticated: ({commit}, isAuthenticated) => {
        commit(SET_AUTHENTICATED, isAuthenticated)
    },
    
    // 提交用户信息
    setUser: ({commit}, user) => {
        commit(SET_USER, user)
    },

    // 清除认证状态和用户信息
    clearCurrentState: ({commit}) => {
        commit(SET_AUTHENTICATED, false)
        commit(SET_USER, {})
    }
}