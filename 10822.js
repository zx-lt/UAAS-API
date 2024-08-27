const createRequest = require("../util/request")

// 获取登录需要的params
const getLoginFormRequest = () => {
  return createRequest(
    {
      url: "/_data/login_home.aspx",
    },
    {
      returnDataType: "all",
    }
  )
}

// 登录
const loginRequest = (cookie, data, userAgent) => {
  return createRequest({
    url: "/_data/login_home.aspx",
    method: "POST",
    headers: {
      Cookie: cookie,
      Origin: "https://authserver.nuaa.edu.cn/authserver",
      Referer: "https://authserver.nuaa.edu.cn/authserver/login?",
      "User-Agent": userAgent,
    },
    data,
  })
}

// 成绩请求
const getScoresRequest = (cookie, data) => {
  return createRequest({
    url: "/xscj/Stu_MyScore_rpt.aspx",
    method: "POST",
    headers: {
      Cookie: cookie,
      Referer: "https://aao-eas.nuaa.edu.cn/eams/courseTableForStd!courseTable.action",
    },
    data,
  })
}

// 考勤请求
const getAttendancesRequest = (cookie, data) => {
  return createRequest({
    url: "/JXKQ/Stu_kqjg_rpt.aspx",
    headers: {
      Cookie: cookie,
      Referer: "https://jwgl.baiyunu.edu.cn/JXKQ/Stu_kqjg.aspx",
    },
    data,
  })
}

// 课表查询表单隐藏input值
const getCoursesFormRequest = (cookie, data) => {
  return createRequest({
    url: "/znpk/Pri_StuSel.aspx",
    headers: {
      Cookie: cookie,
      Referer: "https://aao-eas.nuaa.edu.cn/eams/courseTableForStd.action",
    },
    data,
  })
}

// 获取课表
const getCoursesRequest = (cookie, data, m) => {
  return createRequest({
    url: `/znpk/Pri_StuSel_rpt.aspx?m=${m}`,
    method: "POST",
    headers: {
      Cookie: cookie,
      Referer: "https://aao-eas.nuaa.edu.cn/eams/courseTableForStd.action",
    },
    data,
  })
}

module.exports = {
  getLoginFormRequest,
  loginRequest,
  getScoresRequest,
  getAttendancesRequest,
  getCoursesFormRequest,
  getCoursesRequest,
}
