export const initialState = {
    // naziv ove metode dodajemo u index initialState={sad odje ide naziv ove metode initialState}
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    // ovaj console log pozeljan je stalno da se doda kako bi pratio actions
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            //logic for adding item to basekr
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            //logic for Removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`cant remove product (id: ${action.id})`);
            }
            return { ...state, basket: newBasket, };


        default:
            return state;
    }
}
export default reducer;