export const productReducer = (state, action) => {
    switch (action.type) {
        case 'PRODUCT_FETCH':
            // return Object.assign({}, action.payload);
            return { ...action.payload };
    }
};