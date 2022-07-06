export const state = () => ({
  index: 0,
  result: 0
})

export const mutations = {
  setIndex(state, index) {
    state.index = index
  },
  setResult(state, result) {
    state.result = result
  }
}

export const actions = {
  getIndex({ commit }) {
    commit('setIndex', index);
  },
  getResult({ commit }) {
    commit('setResult', result);
  }
}

export const getters = {
  index: state => state.index,
  result: state => state.result
}