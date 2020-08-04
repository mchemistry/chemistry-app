import handler from '../../../utils/handleShells'

export default {
  elements: ({ data }) => data,
  radius: ({ radius }) => radius,
  subElement: (state) => state.subElement,
  arrMargin: (state) => {
    return handler.getMtAndMl(state.radius, state.subElement.shells)
  },
}
