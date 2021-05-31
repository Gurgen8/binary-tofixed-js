/////function---bin

function bin(num) {
  var dual = [];
  var c;
  while (num != 1) {
    if(isFinite(num) &&  num > 0) {

      c = Math.floor(num / 2);
     dual.unshift(num % 2);
      num = c;
    }else{
      return false
    }
  }
  dual.unshift(1)

  return dual
}


///function--toNumber


function toNumber(binStr) {
  if(typeof(binStr)==="string"){

  return binStr.split("").reverse()
  .map(function(val ,i){
    if(val==="1"){
      return Math.pow(2,i)
    }return 0
  })
  .reduce(function(aggr,val){
    return aggr +val
  },0)

}else{
  return "please write numbers in quotes"
}
}





///function---toFixed




function toFix(num) {
  if(isFinite(num) && num>=0){
  var factor = Math.pow(10, num || 0);
  var v = (Math.round(Math.round(this * factor * 100) / 100) / factor).toString();
  if (v.indexOf(' ') >= 0) {
      return v + factor.toString()(v.length - v.indexOf(' '));
  }
  return v + factor.toString().substr(1);
  }else{
    return "enter positive numbers"
  }
}


alert(toFix.call(1.435779,10))

