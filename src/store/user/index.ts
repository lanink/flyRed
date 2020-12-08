// example
export const G_UID = 'G_UID';
export const A_UID = 'A_UID';
export const M_UID = 'M_UID';

interface State {
    UID: number
}

const state: State = {
    UID: null
}

const getters = {
    [G_UID]() {
        return state.UID
    }
}

const actions = {
    [A_UID]({ commit }) {
        setInterval(() => commit(M_UID), 1000)
    }
}

const mutations = {
    [M_UID](state: State, UID: any) {
        if (!UID) {
            state.UID++;
        } else {
            state.UID = UID;
        }
    }
}

export default {
    state, getters, actions, mutations
}

