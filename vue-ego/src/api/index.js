import axios from '../utils/request'
import base from './base'

const api = {
  getLogin (params) {
    return axios.post(`${base}/login`, params)
  },
  /**
   * 商品列表
   */
  getGoodsList (params) { // {page:xx}
    return axios.get(base.goodsList, {
      params
    })
  },
  /**
   * 搜索商品数据
   * search
   */
  getSearch (params) { // {search:xx}
    return axios.get(base.search, { params })
  },
  /**
   * 获取类目选择
   * {id：cid}
   */
  getSelectCategory (params) {
    return axios.get(base.selectCategory, { params })
  },
  /**
   * 添加商品
   * 参数： title cid  category sellPoint price num desc paramsInfo image
   */
  addGoods (params) { // ={}
    return axios.get(base.addGoods, {
      params
    })
  },
  /**
   * 删除商品 id
   */
  deleteGoods (params) {
    return axios.get(base.deleteGoods, { params })
  },
  /**
   * 编辑商品id
   */
  updateGoods (params) {
    return axios.get(base.updateGoods, { params })
  },
  /**
   * 统计数据
   */
  getStatistical () {
    return axios.get(base.statistical)
  },
  /**
   * 销量对比
   */
  getSellTotal () {
    return axios.get(base.sellTotal)
  },
  /**
   * 规格参数获取列表
   * page：xx
   */
  getParams (params) {
    return axios.get(base.params, { params })
  },
  /**
   * 获取订单数据
   * currPage:xx
   */
  orderList (params) {
    return axios.get(base.orderList, {params})
  },
  /**
   * 规格参数新增
   *  参数：itemCatId,content,specsName
   */
  insertItemParam (params) {
    return axios.get(base.insertItemParam, {params})
  },
  /**
   * 商品列表---获取类目规格配置
   * cid
   */
  categoryData (params) {
    return axios.get(base.categoryData, {params})
  }

}

export default api
