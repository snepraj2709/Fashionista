import { ActionTypes } from "../Utils/actionConstants";

export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    //public data
    case ActionTypes.GetProductList: {
      return {
        ...state,
        allProducts: payload,
      };
    }

    case ActionTypes.GetAllCategories: {
      return {
        ...state,
        allCategories: payload,
      };
    }
    case ActionTypes.GetAllSizes: {
      return {
        ...state,
        allSizes: payload,
      };
    }
    case ActionTypes.ChangeFilter: {
      return {
        ...state,
        filteredProducts: payload,
      };
    }
    //private data
    case ActionTypes.SetWishList: {
      return {
        ...state,
        wishlist: payload,
      };
    }
    case ActionTypes.SetCartList: {
      return {
        ...state,
        cartlist: payload,
      };
    }

    case ActionTypes.SetCartPriceDetails: {
      return {
        ...state,
        cartPriceDetail: payload,
      };
    }

    case ActionTypes.AddAddress: {
      return {
        ...state,
        addressList: { ...addressList, payload },
      };
    }

    case ActionTypes.EditAddress: {
      const updatedAddress = state.addressList.reduce(
        (acc, curr) => (curr.id === payload.id ? [...acc, curr] : [...acc]),
        []
      );
      return {
        ...state,
        addressList: updatedAddress,
      };
    }

    case ActionTypes.DeleteAddress: {
      const updatedAddress = state.addressList.filter(
        (address) => address.id !== payload.id
      );
      return {
        ...state,
        addressList: updatedAddress,
      };
    }

    case ActionTypes.AddOrder: {
      return {
        ...state,
        orderList: payload,
      };
    }
    default: {
      return state;
    }
  }
};
