export const initialState = {
    // naziv ove metode dodajemo u index initialState={sad odje ide naziv ove metode initialState}
    basket: [],
};

function reducer(state, action) {
    console.log(action);
    // ovaj console log pozeljan je stalno da se doda kako bi pratio actions
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding item to basekr
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

            break;

        case 'REMOVE_FROM_BASKET':
            //logic for Removing item from basket
            return { state }
            break;

        default:
            return state;
    }
}
export default reducer;