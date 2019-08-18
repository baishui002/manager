/*
与后台交互模块 （依赖已封装的ajax函数）
 */
import ajax from './ajax';

/* ================== 用户模块 =================== */
// 获取用户信息模块
export const reqRegister = ({ name, email, password, password2, identity }) => ajax('/user/register', { name, email, password, password2, identity }, 'POST')
export const reqLogin = ({email, password}) => ajax('/user/login', { email, password }, 'POST')

/* 获取资金信息模块 */
// 查询所有
export const reqAllFund = ({page, size}) => ajax('/fund/all', {page, size})
// 添加
export const reqAddFund = ({ type, describe, incode, expend, cash, remark }) => ajax('/fund/add', {type, describe, incode, expend, cash, remark},'POST')
// 编辑
export const reqEditFund = ({_id, type, describe, incode, expend, cash, remark} ) => ajax(`/fund/edit/${_id}`, {type, describe, incode, expend, cash, remark},'POST')
// 删除
export const reqDelFund = (_id) => ajax(`/fund/del/${_id}`)




