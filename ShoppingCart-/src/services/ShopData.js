import axios from 'axios'

export default {
  getProducts: () => axios.get('./data/ShopData.json'),
  buyProducts: (payload) => new Promise((resolve, reject) => setTimeout(() => resolve(payload), 2000)), //只是为了模拟axios.post的效果
  getScreen: (data,key)=>{
    let arr = [];
    if (key) {
      data.forEach(item => {
        for (let i = 0; i < item.availableSizes.length; i++) {
          if (item.availableSizes[i] === key) {
            arr.push(item)
          }
        }
      })
    }else{
      arr=data
    }
    
    return arr
  },
  getCollate: (data,key)=>{
    let arr = [];
    if(key==="up"){
      arr = data.sort((a, b) => (a['price'] - b['price']))
      
    }else if(key==="down"){
      arr = data.sort((a, b) => (b['price'] - a['price']))
      
    }else{
      arr = data.sort((a, b) => (a['id'] - b['id'] ))
    }
    return arr
  }
}
