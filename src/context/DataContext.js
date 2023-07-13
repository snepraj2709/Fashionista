import { useEffect, useReducer } from "react";
import { useAuth } from "./authContext";
import { DataReducer } from "../reducer/DataReducer";
import {
  GetAllCategories,
  GetAllProducts,
  GetAllSizes,
} from "../api/allApiCalls";
import { ActionTypes, initialState } from "../utils/actionConstants";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const {
    loginStatus: { token },
  } = useAuth();

  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, status } = await GetAllProducts();
        console.log("data", data);
        if (status === 200 || status === 201) {
          dispatch({
            type: ActionTypes.GetProductList,
            payload: data.products,
          });
        }
      } catch (e) {
        console.log("Product Error:", e);
      }

      try {
        const { data, status } = GetAllCategories();
        if (status === 200 || status === 201) {
          dispatch({
            type: ActionTypes.GetAllCategories,
            payload: data.categories,
          });
        }
      } catch (e) {
        console.log("Category Error", e);
      }

      try {
        const { data, status } = GetAllSizes();
        if (status === 200 || status === 201) {
          dispatch({
            type: ActionTypes.GetAllSizes,
            payload: data.sizes,
          });
        }
      } catch (e) {
        console.log("Size Error", e);
      }

      if (token) {
        try {
          const { data, status } = GetWishlist({ token });
          if (status === 200 || status === 201) {
            dispatch({
              type: ActionTypes.SetWishList,
              payload: data.wishlist,
            });
          }
        } catch (e) {
          console.log("WishList Error", e);
        }

        try {
          const { data, status } = GetCartList({ token });
          if (status === 200 || status === 201) {
            dispatch({
              type: ActionTypes.SetCartList,
              payload: data.cartlist,
            });
          }
        } catch (e) {
          console.log("CartList Error", e);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
