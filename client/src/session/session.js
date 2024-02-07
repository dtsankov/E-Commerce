export const setSession = ({ _id, email, accessToken }) => {
    const user = { _id, email, accessToken };
    sessionStorage.setItem("User", JSON.stringify(user));
    localStorage.setItem("User", JSON.stringify(user));
};

export const getSession = () => {
    const session = sessionStorage.getItem("User");
    const local = localStorage.getItem("User");
    return session ? JSON.parse(session) : local ? JSON.parse(local) : null;
};

export const logoutSession = () => {
    sessionStorage.removeItem("User");
    localStorage.removeItem("User");
    localStorage.removeItem("token");
};



// export const setCartSession = (cart) => {
//     sessionStorage.setItem("Cart", JSON.stringify(cart));
//     localStorage.setItem("Cart", JSON.stringify(cart));
// };

// export const getCartSession = () => {
//     const cart = sessionStorage.getItem("Cart");
//     const local = localStorage.getItem("Cart");
//     return cart ? JSON.parse(cart) : local ? JSON.parse(local) : [];
// };
