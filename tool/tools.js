/**
 * 校验手机号
*/
export function isMobile(mobile) {
    const regex = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/
    return regex.test(mobile)
  }
  
  /**
   * 校验邮箱
  */
  export function isEmail(email) {
    const regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return regex.test(email)
  }
  
  // 验证身份证号
  // 函数参数必须是字符串，因为二代身份证号码是十八位，而在javascript中，十八位的数值会超出计算范围，造成不精确的结果，导致最后两位和计算的值不一致，从而该函数出现错误。
  // 详情查看javascript的数值范围
  export function isIdCard(idcode){
    // 加权因子
    var weight_factor = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
    // 校验码
    var check_code = ['1', '0', 'X' , '9', '8', '7', '6', '5', '4', '3', '2'];
  
    var code = idcode + "";
    var last = idcode[17];//最后一位
  
    var seventeen = code.substring(0,17);
  
    // ISO 7064:1983.MOD 11-2
    // 判断最后一位校验码是否正确
    var arr = seventeen.split("");
    var len = arr.length;
    var num = 0;
    for(var i = 0; i < len; i++){
        num = num + arr[i] * weight_factor[i];
    }
    
    // 获取余数
    var resisue = num%11;
    var last_no = check_code[resisue];
  
    // 格式的正则
    // 正则思路
    /*
    第一位不可能是0
    第二位到第六位可以是0-9
    第七位到第十位是年份，所以七八位为19或者20
    十一位和十二位是月份，这两位是01-12之间的数值
    十三位和十四位是日期，是从01-31之间的数值
    十五，十六，十七都是数字0-9
    十八位可能是数字0-9，也可能是X
    */
    var idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
  
    // 判断格式是否正确
    var format = idcard_patter.test(idcode);
  
    // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
    return last === last_no && format ? true : false;
  }
  
  /**
   * 手机号中间四位变成*号
  */
  export function formatMobile(str) {
    return str.substr(0, 3) + '****' + str.substr(7)
  }
  
  /**
   * 校验数字最多两位小数
  */
  export function isNum(num) {
    const regex = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
    return regex.test(num)
  }
  
  /**
   * 截取后面小数（不四舍五入）
  */
  export function getBit(value, bit) {
    let str = value.toString();
    let strIndex = str.indexOf('.');
    if (strIndex === -1) return str;
    str = str.substring(0, strIndex + bit);
    console.log(str, bit);
    return str;
  }
  
  /**
   * 校验真实姓名
  */
  export function isRealName(name) {
    const regex = /^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/
    return regex.test(name)
  }
  
  // 校验是否是汉字
  export const isChinese = (str_data) => {
    str_data = str_data || String(this);
    return /^[\u4E00-\u9FA5]*$/.test(str_data)
  }
  
  // 去除字符串中所有空格
  export function strTrim(str) {
    return str.replace(/\s+/g, '')
  }
  
  /**
   * 判断是否是微信浏览器
  */
  export function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.indexOf('micromessenger') !== -1) {
      return true
    } else {
      return false
    }
  }
  
  export function findIndex(ary, fn) {
    if (ary.findIndex) {
      return ary.findIndex(fn)
    }
    /* istanbul ignore next */
    let index = -1
    /* istanbul ignore next */
    ary.some(function(item, i, ary) {
      const ret = fn.call(this, item, i, ary)
      if (ret) {
        index = i
        return ret
      }
    })
    /* istanbul ignore next */
    return index
  }
  
  // 获取字符串长度
  export function getStrLength(str) {
    var cArr = str.match(/[^\x00-\xff]/ig)
    return str.length + (cArr == null ? 0 : cArr.length)
  }
  
  // 判断是否是图片
  export function valiImgType(str) {
    if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(str)) {
      return false
    } else {
      return true
    }
  }
  
  /**
   * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
   * 
   * @param num1加数1 | num2加数2
   */
  export function numAdd(num1, num2) {
      var baseNum, baseNum1, baseNum2; // (不生效,再加两个0可以)
      try {
      baseNum1 = num1.toString().split(".")[1].length + 2;
      console.log('baseNum1:',baseNum1)
      } catch (e) {
          baseNum1 = 0;
      }
      try {
      baseNum2 = num2.toString().split(".")[1].length + 2;
      console.log('baseNum2:',baseNum2)
      } catch (e) {
          baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    console.log('baseNum:',baseNum)
    return (num1 * baseNum + num2 * baseNum) / baseNum;
  }
  
  /**
   * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
   * 
   * @param num1被减数  |  num2减数
   */
  export function numSub(num1, num2) { 
      var baseNum, baseNum1, baseNum2; 
      try { 
          baseNum1 = num1.toString().split(".")[1].length; 
      } catch (e) { 
          baseNum1 = 0; 
      } 
      try { 
          baseNum2 = num2.toString().split(".")[1].length; 
      } catch (e) { 
          baseNum2 = 0; 
      } 
      baseNum = Math.pow(10, Math.max(baseNum1, baseNum2)); 
      var precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2; 
      return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision); 
  }
  /**
   * 乘法运算，避免数据相减小数点后产生多位数和计算精度损失。
   * 
   * @param num1 num2
   */
  export function numMulti(num1, num2) { 
      var baseNum = 0; 
      try { 
          baseNum += num1.toString().split(".")[1].length; 
      } catch (e) { 
      } 
      try { 
        baseNum += num2.toString().split(".")[1].length; 
      } catch (e) { 
      } 
      return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum); 
  }
  /**
   * 除法运算，避免数据相减小数点后产生多位数和计算精度损失。
   * 
   * @param num1 num2
   */
  // export function numDiv(num1, num2) { 
  // 	var baseNum1 = 0, baseNum2 = 0; 
  // 	var baseNum3, baseNum4; 
  // 	try { 
  // 		baseNum1 = num1.toString().split(".")[1].length; 
  // 	} catch (e) { 
  // 		baseNum1 = 0; 
  // 	} 
  // 	try { 
  // 		baseNum2 = num2.toString().split(".")[1].length; 
  // 	} catch (e) { 
  // 		baseNum2 = 0; 
  // 	} 
  // 	with (Math) { 
  // 		baseNum3 = Number(num1.toString().replace(".", "")); 
  // 		baseNum4 = Number(num2.toString().replace(".", "")); 
  // 		return (baseNum3 / baseNum4) * pow(10, baseNum2 - baseNum1); 
  // 	} 
  // }
  
  export function noPassByName(str) {
    return new Array(str.length).join('*') + str.substr(-1)
  }