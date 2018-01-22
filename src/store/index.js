import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    age: 18,
    name: 'lucia',
    lists: [
      {   
        username: 'Jnow Snow',
        mobile: 15071452297,
        address: '湖北省 武汉市 黄龙山南路6号高德红外',
        isDefaultAddress: true,
        isReceivingAddress: false,
        id: "00001"
      },
      {   
        username: '张三丰',
        mobile: 15071452297,
        address: '湖北 东湖高新区 黄龙山南路6号高德红外',
        isDefaultAddress: false,
        isReceivingAddress: false,
        id: "00002"
      },
      {   
        username: '李白李白李白李白李白李白李白',
        mobile: 15071452297,
        address: '湖北省 武汉市 东湖高新区东湖高新区东湖高新区东湖高新区东湖高新区东湖高新区 黄龙山南路6号高德红外',
        isDefaultAddress: false,
        isReceivingAddress: true,
        id: "00003"
      },
      {   
        username: '耶哥蕊特',
        mobile: 15071452297,
        address: '湖北省 武汉市 东湖高新区',
        isDefaultAddress: false,
        isReceivingAddress: false,
        id: "00005"
      },
      {   
        username: 'lucia',
        mobile: 15071452297,
        address: '湖北省 武汉市 东湖高新区 6号高德红外',
        isDefaultAddress: false,
        isReceivingAddress: false,
        id: "00006"
      }
    ]
  },
  mutations: {
    increment (state) {
      // setTimeout(function () {
        state.count++
      // }, 2000)
    },
    decrement (state) {
      state.count--
    },
    changeName (state) {
      state.name = "Jon Snow"
    },
    setDefaultAddress (state, id) {
      console.log(id)
      state.lists.map(current => {
        current.isDefaultAddress = current.id === id
      })
    }
  }, 
  getters: {
    isDefaultAddress (state) {
      return state.lists.filter(list => list.isDefaultAddress)
    },
    isReceivingAddress (state) {
      return state.lists.filter(list => list.isReceivingAddress)
    }
  },
  actions: {
    lucia ({ commit }, msg) {
      console.log(920729)
      return new Promise((resolve, reject) => {
        setTimeout(() => {    
          console.log(msg)  
          commit('increment')
          resolve()
        }, 1000);
      })
    }
  }
})
