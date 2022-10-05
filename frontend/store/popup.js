export const state = () => ({
	isOpen: false,
	data: null,
})

export const getters = {
	isOpen({ isOpen }) {
		return isOpen
	},
	data({ data }) {
		return data
	},
}

export const mutations = {
	setIsOpen(state, { isOpen }) {
		state.isOpen = isOpen
	},

	setData(state, { data = null }) {
		state.data = data
	},
}

export const actions = {
	setIsOpen({ commit }, payload) {
		commit('setIsOpen', payload)
	},

	setData({ commit }, payload) {
		commit('setData', payload)
	},
}
