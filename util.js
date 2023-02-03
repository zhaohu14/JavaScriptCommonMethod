/* =======================数组去重================================= */
function unique1(arr) {
  return [...new Set(arr)]
}
function unique2(arr) {
  var obj = {}
  return arr.filter(ele => {
    if (!obj[ele]) {
      obj[ele] = true
      return true
    }
  })
}
function unique3(arr) {
  var result = []
  arr.forEach(ele => {
    if (result.indexOf(ele) == -1) {
      result.push(ele)
    }
  })
  return result
}
/* =======================数组去重================================ */

/* =======================字符串================================= */
String.prototype.unique = function () {
  var obj = {},
    str = '',
    len = this.length
  for (var i = 0; i < len; i++) {
    if (!obj[this[i]]) {
      str += this[i]
      obj[this[i]] = true
    }
  }
  return str
}
function uniq(str) {
  return str.replace('/(\w)\1+/g,’$1')
}
/* =======================字符串================================= */

/* =======================圣杯模式继承================================= */
function inherit(Target, Origin) {
  function F() { }
  F.prototype = Origin.prototype
  Target.prototype = new F()
  Target.prototype.constructor = Target
  // The final prototype points to
  Target.prop.uber = Origin.prototype
}
/* =======================圣杯模式继承================================= */


/* =======================验证邮箱================================= */
function isAvailableEmail(sEmail) {
  var reg = /^([\w+\.])+@\w+([.]\w+)+$/
  return reg.test(sEmail)
}
/* =======================验证邮箱================================= */



module.exports = {
  unique1,
  unique2,
  unique3,
  uniq,
  inherit,
  isAvailableEmail

}