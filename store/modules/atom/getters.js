import handler from '../../../utils/handleShells'

export default {
  elements: ({ data }) => data,
  radius: ({ radius }) => radius,
  subElement: ({ subElement }) => subElement,
  arrMargin: (state) => {
    return handler.getMtAndMl(state.radius, state.subElement.shells)
  },
  special: (state) => state.exceptions.includes(state.subElement.number),
}
