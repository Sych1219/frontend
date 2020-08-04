import axios from '../request'

//注册
export const registerApi = (name,pwd,phone)=>axios.post("/api/v1/pri/user/register",{
    "name":name,
    "pwd":pwd,
    "phone":phone
})

//登陆 /api/v1/pri/user/login
export const loginApi = (phone,pwd)=>axios.post("/api/v1/pri/user/login",{
    "phone":phone,
    "pwd":pwd
})

//轮播图模块 /api/v1/pub/video/list_banner
export const getBanner = ()=> axios.get("/api/v1/pub/video/list_banner")

//视频列表接口 /api/v1/pub/video/list
export const getVideoList = ()=> axios.get("/api/v1/pub/video/list")

//视频详情 /api/v1/pub/video/find_detail_by_id?video_id=40
export const getVideoDetailById = (videoId) => axios.get("/api/v1/pub/video/find_detail_by_id?",{
    params:{
        video_id:videoId
    }
})


//下单接口
export const saveOrder = (token, videoId) => axios.post("/api/v1/pri/order/save",{
    "video_id":videoId
},{
    headers:{
        "token":token
    }
})

//订单列表 /api/v1/pri/order/list
export const orderList = (token) => axios.get("/api/v1/pri/order/list",{
    params:{
        "token":token
    }
})

//用户信息接口 /api/v1/pri/user/find_by_token?
export const getUserInfo = (token) => axios.get("/api/v1/pri/user/find_by_token",{
    params:{
        "token":token
    }
})
