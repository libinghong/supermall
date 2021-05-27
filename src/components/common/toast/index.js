import Toast from './Toast'
const obj = {}
//封装插件
  obj.install = function (Vue) {

    //1.创建组件构造器
    const toastcontrustor = Vue.extend(Toast) 

    //2.new的方式，根据组件构造器，可以创建以恶组件对象
    const toast = new toastcontrustor()

    //3.将组件对象挂载到一个元素上
    toast.$mount(document.createElement('div'))

    //4.body.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
  }

 
 export default obj