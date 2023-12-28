// counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  next: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    toggleNext(state) {
      state.next = !state.next; // สลับค่า next จาก true เป็น false หรือจาก false เป็น true
    },
    // สามารถเพิ่ม actions อื่นๆ ตรงนี้ได้ตามต้องการ
  },
});

export const { increment, decrement, toggleNext } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectNext = (state) => state.next; // เพิ่ม selector สำหรับ next

export default counterSlice.reducer;
