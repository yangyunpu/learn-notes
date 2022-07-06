import Vue from 'vue'
import api from '../api'
import wx from 'weixin-jsapi'

const vm = new Vue()
/**
 * 微信签名验证
*/
export function getWXSign(data) {
  return new Promise((resolve, reject) => {
    vm.reqM2Service.post(api.wxSign, data).then(res => {
      const config = res.result // 返回wx.config需要的参数
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: config.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
        timestamp: config.timestamp, // 必填，生成签名的时间戳
        nonceStr: config.nonceStr, // 必填，生成签名的随机串
        signature: config.signature, // 必填，签名，见附录1
        jsApiList: ['scanQRCode', 'closeWindow', 'updateAppMessageShareData', 'updateTimelineShareData', 'hideAllNonBaseMenuItem'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        openTagList: ['wx-open-launch-app']
      })
      wx.ready(() => {
        resolve()
      })
      wx.error((err) => {
        reject(err)
        console.error('wxErr' + err)
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      })
    }).catch(err => {
      console.log('err:' + err)
      reject(err)
    })
  })
}

