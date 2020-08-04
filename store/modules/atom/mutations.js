export default {
  SET_SUB_ELEMENT: (state) => {
    state.subElement = state.data[Math.floor(Math.random() * state.data.length)]
  },
}
