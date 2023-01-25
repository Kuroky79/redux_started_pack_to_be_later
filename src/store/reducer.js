
const defaultState = {
    cash: 5
}



export const reducer = (state = defaultState, action) => {
    switch (action.type){
        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload} //изменение состояния общий reducer

        case 'GET_CASH':
            return {...state, cash: state.cash - action.payload}
        default:
            return state

    }
}