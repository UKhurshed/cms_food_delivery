import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { HelloState } from '@/store/types'

Vue.use(Vuex)

const store: StoreOptions<HelloState> = {
  state: {
    helloMessage: 'Hello From VueX'
  },
  modules: {

  }
}

export default new Vuex.Store(store)
