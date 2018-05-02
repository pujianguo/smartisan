import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carPanelData: [],
    maxOff: false,
    carShow: false,
    carTimer: null,
    ball: {
      show: false,
      el: null,
      img: ''
    }
  },
  getters: {
    totleCount (state) {
      let count = 0
      state.carPanelData.forEach(goods => {
        count += goods.count
      })
      return count
    },
    totlePrice (state) {
      let price = 0
      state.carPanelData.forEach(goods => {
        price += goods.count * goods.price
      })
      return price
    }
  },
  mutations: {
    addCarPanelData (state, data) {
      let bOff = true
      if (!state.ball.show) {
        state.carPanelData.forEach(goods => {
          if (goods.sku_id === data.sku_id) {
            goods.count++
            bOff = false
            if (goods.count > goods.limit_num) {
              goods.count--
              state.maxOff = true
              return
            }
            state.carShow = true
            state.ball.show = true
            state.ball.img = data.ali_image
            state.ball.el = event.path[0]
          }
        })
        if (bOff) {
          let goodsData = data
          Vue.set(goodsData, 'count', 1)
          state.carPanelData.push(goodsData)
          state.carShow = true
          // 加入购入车动画
          state.ball.show = true
          state.ball.img = data.ali_image
          state.ball.el = event.path[0]
        }
      }
    },
    delCarPanelData (state, id) {
      state.carPanelData.forEach((goods, index) => {
        if (goods.sku_id === id) {
          state.carPanelData.splice(index, 1)
          return false
        }
      })
    },
    closePrompt (state) {
      state.maxOff = false
    },
    showCar (state) {
      clearTimeout(state.carTimer)
      state.carShow = true
    },
    hideCar (state) {
      state.carTimer = setTimeout(() => {
        state.carShow = false
      }, 500)
    }
  }
})
