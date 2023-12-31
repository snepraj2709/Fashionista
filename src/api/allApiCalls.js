import axios from "axios";
//auth routes
export const LoginService = async ({ email, password }) =>
  axios.post("/api/auth/login", { email, password });

export const SignUpService = async ({ email, password, name }) => {
  return axios.post("/api/auth/signup", { email, password, name });
};

// public routes
export const GetAllProducts = async () => axios.get("/api/products");

export const GetAllCategories = async () => axios.get("/api/categories");

export const GetAllSizes = async () => axios.get("/api/sizes");

export const GetSingleSize = async () => axios.get("/api/user/sizes/:sizeId");

//private route (wishlist routes)
export const GetWishlist = async ({ encodedToken }) => {
  return axios.get("/api/user/wishlist", {
    headers: { authorization: encodedToken },
  });
};

export const PostWishlist = async ({ product, encodedToken }) => {
  return axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: encodedToken } }
  );
};

export const DeleteWishlist = async ({ productId, encodedToken }) => {
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: { authorization: encodedToken },
  });
};
//cart routes
export const GetCartList = async ({ encodedToken }) =>
  axios.get("/api/user/cart", {
    headers: { authorization: encodedToken },
  });

export const AddToCart = async ({ product, encodedToken }) => {
  return axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: encodedToken } }
  );
};

export const DeleteFromCart = async ({ productId, encodedToken }) => {
  return axios.delete(`/api/user/cart/${productId}`, {
    headers: { authorization: encodedToken },
  });
};

export const PlusMinusCart = async ({ productId, encodedToken, type }) => {
  return axios.post(
    `/api/user/cart/${productId}`,
    { action: { type } },
    { headers: { authorization: encodedToken } }
  );
};
