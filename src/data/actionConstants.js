export const ActionTypes = {
  InitialDataFetch: "INITIAL_DATA_FETCH",
  ToggleNav: "TOGGLE_NAV",
  ChangeFilter: "CHANGE_FILTER",
  SetWishlist: "SET_WISHLIST",
  SetCartlist: "SET_CARTLIST",
  SetCartPriceDetails: "SET_CART_PRICE_DETAILS",
  ResetCartPriceDetails: "RESET_CART_PRICE_DETAILS",
  ClearCart: "CLEAR_CART",
  AddAddress: "ADD_ADDRESS",
  EditAddress: "EDIT_ADDRESS",
  DeleteAddress: "DELETE_ADDRESS",
  AddOrder: "ADD_ORDER",
};

export const Filters = {
  SortBy: "SORT_BY",
  Categories: "CATEGORIES",
  Rating: "RATING",
  Sizes: "SIZES",
  PriceRange: "PRICE_RANGE",
  Search: "SEARCH",
};

export const CartlistActionType = {
  Increment: "INCREMENT",
  Decrement: "DECREMENT",
};

export const Categories = {
  Men: "MEN",
  Women: "WOMEN",
  Kids: "KIDS",
};
export const Sizes = {
  s: "S",
  m: "M",
  l: "L",
  xl: "XL",
  xxl: "XXL",
};

export const SortBy = {
  lowTohigh: "LOW_TO_HIGH",
  highToLow: "HIGH_TO_LOW",
};
