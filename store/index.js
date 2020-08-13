import Vuex from 'vuex'
import atom from './modules/atom'
import tabs from './modules/tabs'
const store = () => {
  return new Vuex.Store({
    modules: {
      atom,
      tabs,
    },
  })
}

export default store
