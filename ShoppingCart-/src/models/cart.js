
export default {
  namespace: 'cart',
  state: {
    cartData: [],
    count: 0,
    amount: 0
  },
  effects: {
    *addCart({ payload: { data, size } }, { put }) {
      yield put({
        type: 'cartData',
        payload: {
          data,
          size
        }
      })
    },
    *changeOne({ payload: { key, id, size } }, { put }) {
      yield put({
        type: 'changeNum',
        payload: {
          key,
          id,
          size
        }
      })
    },
    *remoteOne({ payload:{id ,size} }, { put }) {
      yield put({
        type: 'remoteData',
        payload: {
          id,
          size
        }
      })
    },
    *setStorage({ payload }, { put }) {
      yield put({
        type: 'storageData',
        data: {
          _cartData: JSON.parse(window.localStorage.cartData),
          _count: window.localStorage.count,
          _amount: JSON.parse(window.localStorage.amount)
        }
      })
    },
    *settlementData({ payload }, { put }) {
      yield put({
        type: 'settlement'
      })
    }
  },
  reducers: {
    cartData(state, payload) {

      const { cartData } = state
      const { data, size } = payload.payload
      let key = 0;
      let count = 0
      let amount = 0
      cartData.forEach(item => {
        if (item.id === data.id && item.size === size) {
          item.number += 1;
        }
        else {
          key++
        }
        count += item.number
      })
      if (cartData.length === key) {
        cartData.push({
          ...data,
          number: 1,
          size: size
        })
        count += 1
      }
      console.log("/////////////////////////", cartData);
      cartData.forEach(item => {
        amount = amount + item.price * item.number
      })
      const storage = window.localStorage
      let _cartData = JSON.stringify(cartData)
      let _count = count
      let _amount = JSON.stringify(amount)
      storage.setItem("cartData",_cartData)
      storage.setItem("count",_count)
      storage.setItem("amount", _amount)
      return {
        ...state,
        cartData,
        count,
        amount
      }
    },
    changeNum(state, { payload: { key, id, size } }) {
      console.log(">.........",size);
      
      const { cartData } = state
      let count = 0
      let amount = 0
      cartData.forEach(item => {
        if (item.id === id&& item.size === size) {
          item.number += key
        }
        count += item.number
      })
      cartData.forEach(item => {
        amount = amount + item.price * item.number
      })
      const storage = window.localStorage
      let _cartData = JSON.stringify(cartData)
      let _count = count
      let _amount = JSON.stringify(amount)
      storage.setItem("cartData",_cartData)
      storage.setItem("count",_count)
      storage.setItem("amount", _amount)
      return {
        ...state,
        cartData,
        count,
        amount
      }
    },
    remoteData(state, { payload: { id, size } }) {
      const { cartData } = state
     
      let amount = 0
      let count = 0
      cartData.forEach(item => {
        if (item.id === id&& item.size === size) {
          cartData.splice(cartData.findIndex(item => item.id === id&& item.size === size), 1)
        }
      })
      cartData.forEach(item => {
        count += item.number
      })
      cartData.forEach(item => {
        amount = amount + item.price * item.number
      })
      const storage = window.localStorage
      let _cartData = JSON.stringify(cartData)
      let _count = count
      let _amount = JSON.stringify(amount)
      storage.setItem("cartData",_cartData)
      storage.setItem("count",_count)
      storage.setItem("amount", _amount)
      return {
        ...state,
        cartData,
        count,
        amount
      }
    },
    storageData(state, { data }) {
      return {
        ...state,
        cartData: data._cartData,
        count: data._count,
        amount: data._amount
      }
    },
    settlement(state, payload){
      const storage = window.localStorage
      let _cartData = []
      let _count = 0
      let _amount = 0
      storage.setItem("cartData",_cartData)
      storage.setItem("count",_count)
      storage.setItem("amount", _amount)
      return {
        ...state,
        cartData:[],
        count: 0,
        amount: 0
      }
    }
  }
}