export const initialState = {
    // naziv ove metode dodajemo u index initialState={sad odje ide naziv ove metode initialState}
    basket: [{
        id: "12321341",
        title: "Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)",
        price: 309.99,
        rating: 5,
        image: "https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg",

    },
    {
        id: "12321342",
        title: "AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler",
        price: 130.28,
        rating: 5,
        image: "https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SL1384_.jpg",
    },
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    // ovaj console log pozeljan je stalno da se doda kako bi pratio actions
    switch (action.type) {
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