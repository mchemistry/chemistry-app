import Vuex from 'vuex'
import atom from './modules/atom'
const store = () => {
  return new Vuex.Store({
    modules: {
      atom,
    },
  })
}

export default store
