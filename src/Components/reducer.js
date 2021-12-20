//reducer is something that dispatches an action to the data layer
export const initialState = {
  basket: [],
}

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)
//reduce if a function that maps through the basket and tally the total

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, //when add to basket action is received,we return the original state but the basket is changed
        basket: [...state.basket, action.item], //now the basket should contain curent state plus the added action items
      }

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        //storing basket item to index
        (basketItem) => basketItem.id === action.id //returns the first match
      )
      let newBasket = [...state.basket] //copying the basket into temporary basket

      if (index >= 0) {
        //if object id found then remove the item at first index
        newBasket.splice(index, 1)
        //splice method adds or removes array elements and overrides the original array
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as its not in basket!`
        )
      }
      return {
        ...state,
        basket: newBasket,
      }

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }

    // basket: state.basket.filter(item => item.id !== action.id),this code removes all the targeted id
    default:
      return state
    //in case of error return state;
  }
}
export default reducer
