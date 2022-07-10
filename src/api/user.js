import request from '@/utils/request'
import store from '@/store'

// 登录
export const login = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

// 获取用户个人资料
export const AParameters = () => {
  return request({
    url: '/user',
    header: {
      Authorization: store.state.user.token
    }
  })
}

// 收藏列表
export const Collect = () => {
  return request({
    url: '/user/favorites',
    header: {
      Authorization: store.state.user.token
    }

  })
}

// 我的出租
export const Rent = () => {
  return request({
    url: '/user/houses',
    header: {
      Authorization: store.state.user.token
    }
  })
}

// 已经发布房源
export const Release = () => {
  return request({
    url: '/user/houses',
    header: {
      Authorization: store.state.user.token
    }
  })
}

// 城市列表
export const getCityListData = (level = 1) =>
  request({
    url: '/area/city',
    method: 'GET',
    params: { level }
  })

// City - 获取热门城市数据
export const getHotListData = () =>
  request({
    url: '/area/hot',
    method: 'GET'
  })
