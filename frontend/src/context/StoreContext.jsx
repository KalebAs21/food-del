import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFood_list] = useState([]);
  const [token, setToken] = useState("");
  const url = "http://localhost:4000";

  // ------------------- CART ACTIONS -------------------

  const addToCart = async (itemId) => {
    if (!token) {
      // Optional: show message that user must login
      console.warn("No token available, cannot add to cart");
      return;
    }

    try {
      const response = await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // update cartItems state from server response
      setCartItems(response.data.cart || {});
    } catch (err) {
      console.error("Add to cart error:", err);
    }
  };

  const removeFromCart = async (itemId) => {
    if (!token) return;

    try {
      const response = await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCartItems(response.data.cart || {});
    } catch (err) {
      console.error("Remove from cart error:", err);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // ------------------- FETCH DATA -------------------

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFood_list(response.data.data);
    } catch (err) {
      console.error("Fetch food list error:", err);
    }
  };

  const loadCartData = async (jwtToken) => {
    if (!jwtToken) return;

    try {
      const response = await axios.post(
        url + "/api/cart/get",
        {},
        { headers: { Authorization: `Bearer ${jwtToken}` } }
      );

      setCartItems(response.data.cart || {});
    } catch (err) {
      console.error("Load cart data error:", err);
    }
  };

  // ------------------- INITIAL LOAD -------------------

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();

      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        await loadCartData(savedToken);
      }
    }

    loadData();
  }, []);

  // ------------------- CONTEXT VALUE -------------------

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
