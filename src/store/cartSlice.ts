import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 1) Добавить товар в корзину (или увеличить его количество)
    addToCart(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const existing = state.items.find((item) => item.productId === productId);

      if (existing) {
        // товар уже есть → увеличиваем количество
        existing.quantity += 1;
      } else {
        // товара нет → добавляем с количеством 1
        state.items.push({ productId, quantity: 1 });
      }
    },

    // 2) Убрать полностью товар из корзины
    removeFromCart(state, action: PayloadAction<string>) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
    },

    // 3) Изменить количество товара на delta (+1 или -1)
    changeQty(
      state,
      action: PayloadAction<{ productId: string; delta: number }>,
    ) {
      const { productId, delta } = action.payload;
      const existing = state.items.find((item) => item.productId === productId);
      if (!existing) return;

      existing.quantity += delta;

      // если стало 0 или меньше — удаляем из корзины
      if (existing.quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.productId !== productId,
        );
      }
    },

    // 4) Полностью очистить корзину
    clearCart(state) {
      state.items = [];
    },
  },
});

// Экшены
export const { addToCart, removeFromCart, changeQty, clearCart } =
  cartSlice.actions;

// Редьюсер по умолчанию
export default cartSlice.reducer;

// === Селекторы (в конце cartSlice.ts) ===
import type { RootState } from "./store";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartDistinctCount = (state: RootState) =>
  state.cart.items.length;

export function selectCartItemById(productId: string) {
  return (state: RootState) =>
    state.cart.items.find((item) => item.productId === productId) ?? null;
}
