function addClass(ele, className) {
  ele.className += ` ${className}`
}

function removeClass(ele, className) {
  ele.className = ele.className
    .replace(` ${className}`, '')
    .replace(className, '')
}

window.onload = () => {
  let data = [
    "assets/img/TOP_Ys_20ss_SL_5.jpg",
    "assets/img/TOP_Ys_20ss_SL_7.jpg",
    "assets/img/TOP_Ys_20ss_SL_11.jpg",
  ]
  let ul = document.getElementById('second-anim-ul')
  ul.className = 'anim-img-ul large-img-box absolute-center'
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement(`li`)
    li.className = 'opacity-li absolute-center opacity-transition'
    if (i === 0) {
      // 第一个元素显示
      addClass(li, 'add-active')
    }
    let img = document.createElement(`img`)
    img.className = 'large-img'
    img.src = data[i]
    li.appendChild(img)
    ul.appendChild(li)
  }
  let lis = ul.getElementsByTagName('li')
  // 从第一个元素开始循环显示，其他的隐藏
  let _cur = 1
  setInterval(() => {
    for (let i = 0; i < lis.length; i++) {
      if (i === _cur) addClass(lis[i], 'add-active')
      else removeClass(lis[i], 'add-active')
    }
    if (++_cur >= lis.length) _cur = 0
  }, 2000)
}

