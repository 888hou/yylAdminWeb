import request from '@/utils/request'

// ----------------日志管理----------------
/**
 * 日志管理列表
 * @param {array} params 请求参数
 */
export function list(params) {
  return request({
    url: '/admin/AdminUserLog/list',
    method: 'get',
    params: params
  })
}
/**
 * 日志管理信息
 * @param {array} params 请求参数
 */
export function info(params) {
  return request({
    url: '/admin/AdminUserLog/info',
    method: 'get',
    params: params
  })
}
/**
 * 日志管理删除
 * @param {array} data 请求数据
 */
export function dele(data) {
  return request({
    url: '/admin/AdminUserLog/dele',
    method: 'post',
    data
  })
}
/**
 * 日志管理清除
 * @param {array} data 请求数据
 */
 export function clear(data) {
  return request({
    url: '/admin/AdminUserLog/clear',
    method: 'post',
    data
  })
}
/**
 * 日志统计
 * @param {array} data 请求数据
 */
export function stat(data) {
  return request({
    url: '/admin/AdminUserLog/stat',
    method: 'post',
    data
  })
}
