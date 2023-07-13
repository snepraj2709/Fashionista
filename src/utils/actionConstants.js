export const ActionTypes = {
  //public actions
  GetProductList: "GET_PRODUCT_LIST",
  GetAllCategories: "GET_ALL_CATEGORIES",
  GetAllSizes: "GET_ALL_SIZES",
  ChangeFilter: "CHANGE_FILTER",
  //private actions
  SetWishList: "SET_WISHLIST",
  SetCartList: "SET_CARTLIST",
  SetCartPriceDetails: "SET_CART_PRICE_DETAILS",
  AddAddress: "ADD_ADDRESS",
  EditAddress: "EDIT_ADDRESS",
  DeleteAddress: "DELETE_ADDRESS",
  AddOrder: "ADD_ORDER",
};
export const initialState = {
  //public values
  filters: {
    sortBy: "",
    categories: {},
    rating: "",
    sizes: {},
    search: "",
    PriceRange: 0,
  },
  allProducts: [],
  allCategories: [],
  allSizes: [],
  filteredProducts: [],
  //private values
  wishlist: [],
  cartlist: [],
  cartPriceDetail: {},
  addressList: [
    {
      address: "A 205, Jamnagar Colony",
      alternateMobile: "6394920434",
      city: "Varanasi",
      id: "1",
      mobile: "6756789867",
      name: "Sneha Prajapati",
      pincode: "678987",
      state: "UP",
    },
  ],
  orderList: [],
};
