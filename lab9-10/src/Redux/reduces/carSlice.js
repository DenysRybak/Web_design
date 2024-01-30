import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carItems: [],
    carTotalQuantity: 0,
};

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.carItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.carItems[itemIndex].carQuantity += 1;
            } else {
                const temp = { ...action.payload, carQuantity: 1 };
                state.carItems.push(temp);
            }

            state.carTotalQuantity += 1;
        },
        incrementQuantity(state, action) {
            const carId = action.payload;
            const carItem = state.carItems.find((item) => item.id === carId);

            if (carItem) {
                carItem.carQuantity += 1;
                state.carTotalQuantity += 1;
            }
        },
        decrementQuantity(state, action) {
            const carId = action.payload;
            const carItem = state.carItems.find((item) => item.id === carId);

            if (carItem && carItem.carQuantity > 0) {
                carItem.carQuantity -= 1;
                state.carTotalQuantity -= 1;

                if (carItem.carQuantity === 0) {
                    state.carItems = state.carItems.filter((item) => item.id !== carId);
                }
            } 
        },
    },
});

export const { addToCart, incrementQuantity, decrementQuantity } = carSlice.actions;
export default carSlice.reducer;
