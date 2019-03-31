import Vue from "vue";

const state = {
  questions: []
};

// getters
const getters = {
  questions: ({ questions }) => questions
};

// actions
const actions = {
  async findQuestion({ commit }) {
    let { data } = await Vue.axios.get("/questions");

    commit("questions", data);
  }
};

// mutations
const mutations = {
  questions(state, questions) {
    state.questions = questions;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
