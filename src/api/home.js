import request from '@/utils/request'

// 轮播图
export const swiper = () => {
  return request({
    url: '/home/swiper'
  })
}

// 租房小组
export const groups = () => {
  return request({
    url: '/home/groups'
  })
}
