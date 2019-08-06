/*
与后台交互模块 （依赖已封装的ajax函数）
 */
import ajax from './ajax';

/* ================== 用户认证模块 =================== */
// 获取用户信息
export const reqUserId = (code) => ajax('/welike/qylogin', { code });

// 查找用户
export const reqSearch = () => ajax('/userInfo/search');

// 送出点赞权限    isDirector：1/0
export const reqIsDirector = (userid) => ajax('/userInfo/isDirector', { userid });


/* ================== 点赞模块 =================== */
// 最新动态
export const reqDynamic = () => ajax('/like/dynamicInfo');
// 排行榜
export const reqRank = ({ type, typeName, time, pageNum }) => ajax('/userInfo/userTopInfo', { type, typeName, time, pageNum });
// 点赞信息统计
export const reqStatis = (userid) => ajax('/like/newLike', { userid });
// 赞/好评列表
export const reqLikeList = ({ userid, type, typeName, pageNum, pageSize }) => ajax('/like/allLike', { userid, type, typeName, pageNum, pageSize });
// 赞/好评详情
export const reqLikeDetail = (fromId, likeId, type) => ajax('/like/detail', { fromId, likeId, type });
// 标签列表
export const reqLabelList = () => ajax('/like/getList');
// 提交赞/好评
export const reqSubmitLike = ({ fromId, toId, label, type, comment, typeName, likeId }) => ajax('/userInfo/sumitLikeInfo', { fromId, toId, label, type, comment, typeName, likeId });
// 修改赞/好评
export const reqUpdateLike = ({ fromId, toId, label, type, comment, likeId }) => ajax('/userInfo/sumitLikeInfo', { fromId, toId, label, type, comment, likeId, typeName: 'edit' });
// 撤回赞/好评
export const reqLikeDel = (likeId) => ajax('/like/deleteLabel', { likeId });
// FAQ
export const reqFaq = () => ajax('/faq/info');

/* ================== 商品模块 =================== */
// 可兑换/不可兑换商品
export const reqGoods = ({ userid, type, pageNum }) => ajax('/goods/convertible', { userid, type, pageNum });
// 商品详情
export const reqGoodsDesc = ({ userid, id }) => ajax('/goods/selectGoodsById', { userid, id });
// 商品提交
export const reqGoodsSubmit = ({ userid, id, number, goodsColor, goodsSize }) => ajax('/goods/submitGoods', { userid, id, number, goodsColor, goodsSize });
// 商品记录
export const reqGoodsRecord = ({ userid, pageNum }) => ajax('/history/historyInfo', { userid, pageNum });