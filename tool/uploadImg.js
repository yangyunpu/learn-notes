import $ from 'jquery'
// 上传图片或视频
const url = process.env.VUE_APP_UPLOAD_URL

// 上传头像
export function upLoadImg(formData) {
  return $.ajax({
    type: 'POST',
    url: url,
    data: formData,
    dataType: 'JSON',
    enctype: 'multipart/form-data',
    cache: false,
    processData: false,
    contentType: false
  })
}

export const upLoadUrl = url


