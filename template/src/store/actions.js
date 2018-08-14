import api from '@/api'

export default {
  FETCH_LIST_DATA: ({ commit, dispatch, state }) => {
    return api.get('/')
      .then(list => commit('SET_LIST', { list }))
  }
}
