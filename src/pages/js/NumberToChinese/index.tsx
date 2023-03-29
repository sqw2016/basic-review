const NumberToChinese = props => {
  // 将 number 从后向前拆分成 4 位一组
  const splitNumber = (num) => {
    let strNum = num.toString()
    const r = []
    while(strNum.length > 4) {
      r.push(strNum.slice(-4))
      strNum = strNum.slice(0, -4)
    }
    r.push(strNum)
    return r
  }

  const units = ["千", "百", "十", ""]
  const fragmentUnits = ["", "万", "亿"]
  const chineseNums = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]

  const fragmentNumToChinese = val => {
    let r = ""
    for (let i = 0; i < val.length; i++) {
      const chineseNum = chineseNums[val[i]]
      if (chineseNum === chineseNums[0]) {
        if (r[r.length - 1] !== chineseNums[0]) r += chineseNums[0]
      } else r += (chineseNums[val[i]] + units[i])
    }
    if (r[r.length - 1] === chineseNums[0]) r = r.slice(0, -1)
    return r;
  }

  const numberToChinese = val => {
    const fragmentNum = splitNumber(val).reverse()
    let r = ""
    for (let i = 0; i < fragmentNum.length; i++) {
      const fragmentChineseNum = fragmentNumToChinese((fragmentNum[i]))
      if (fragmentChineseNum) r += (fragmentChineseNum + fragmentUnits[2 - i])
    }
    return r
  }

  return <div>
    <h1>数字转中文</h1>
    <h2>101020120: ${numberToChinese(101020120)}</h2>
    <h2>1234678890: ${numberToChinese(1234678890)}</h2>
    <h2>100000000011: ${numberToChinese(100000000011)}</h2>
    <h2>100000101111: ${numberToChinese(100000101111)}</h2>
    <h2>100000000001: ${numberToChinese(100000000001)}</h2>
  </div>
}

export default NumberToChinese;