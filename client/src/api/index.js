/*
与后台交互模块 （依赖已封装的ajax函数）
 */
import ajax from './ajax';

/* ================== 用户模块 =================== */
// 获取用户信息
export const reqRegister = (name, email, password, identity) => ajax('api/user/register', { name, email, password, identity })
export const reqRegister = (email, password) => ajax('api/user/login', { email, password })
export const reqRegister = () => ajax('api/user/logout')





