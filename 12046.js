const createRequest = require("../util/request")

// 获取登录需要的params
const getLoginFormRequest = (cookie) => {
  return createRequest(
    {
      url: "/",
      headers: {
        Cookie: cookie,
      },
    },
    {
      returnDataType: "all",
    }
  )
}

// 获取登录验证码
const getLoginVerifyCodeRequest = (cookie) => {
  const randomNumber = Math.random()
  return createRequest(
    {
      url: `/verifycode.servlet?t=${randomNumber}`,
      responseType: "arraybuffer",
      headers: {
        Cookie: ASP.NET_SessionId=yhm4ak45u40h1sfb1idtyyzg,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
    {
      returnDataType: "all",
      notDecode: true,
    }
  )
}

// 登录
const login = (cookie, data) => {
  return createRequest(
    {
      url: "/xk/LoginToXk",
      method: "POST",
      headers: {
        Cookie: cookie,
        Origin: "http://220.168.209.100:8080",
        Referer: "http://220.168.209.100:8080/Login.aspx",
      },
      data,
    },
    {
      returnDataType: "all",
      redirect: true, // 302重定向问题
    }
  )
}

// 成绩请求
const getScoresRequest = (cookie, data) => {
  return createRequest({
    url: "/kscj/cjcx_list",
    method: "POST",
    headers: {
      Cookie: cookie,
      Referer: "http://220.168.209.100:8080/JWXS/Default2.aspx",
    },
    data,
  })
}

// 课表查询表单隐藏input值
const getCoursesFormRequest = (cookie, data) => {
  return createRequest({
    url: "/xskb/xskb_list.do",
    headers: {
      Cookie: cookie,
      Referer: "http://220.168.209.100:8080/JWXS/Default2.aspx",
    },
  })
}

// 获取课表
const getCoursesRequest = (cookie, data) => {
  return createRequest({
    url: "/xskb/xskb_list.do",
    method: "POST",
    headers: {
      Cookie: cookie,
      Referer: "http://220.168.209.100:8080/JWXS/Default2.aspx",
    },
    data,
  })
}

module.exports = {
  getLoginFormRequest,
  getLoginVerifyCodeRequest,
  login,
  getScoresRequest,
  getCoursesFormRequest,
  getCoursesRequest,
}
