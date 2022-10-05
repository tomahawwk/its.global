export const state = () => ({
    headerActive: true,
});
  
export const getters = {
    headerActive({ headerActive }) {
        return headerActive;
    },
};
  
export const mutations = {
    header(state, { active }) {
        state.headerActive = active;
    },
};
  
export const actions = {
    header({ commit }, payload) {
        commit("header", payload);
    },
};
  