/*
与后台交互模块 （依赖已封装的ajax函数）
 */
import ajax from './ajax';

/* ================== 用户模块 =================== */
// 获取用户信息
export const reqRegister = ({ name, email, password, password2, identity }) => ajax('/user/register', { name, email, password, password2, identity }, 'POST')
export const reqLogin = ({email, password}) => ajax('/user/login', { email, password }, 'POST')
export const reqLogout = () => ajax('/user/logout')





