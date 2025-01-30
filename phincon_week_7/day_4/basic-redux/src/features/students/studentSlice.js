import { createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "./studentAction";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    data: null,
    message: null,
    isLoading: false,
    error: null,
  },
  //reducer untuk logic atau function  dari state lama menjadi state baru
  reducers: {},
  //untuk menangani function yang bersifat async
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.isLoading = false;
        //menangkap pesan error ketika ada eror
        state.error = action.error.message;
        // console.log(action.error.message);
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        //karena berhasil maka loadingnya di set false kembali
        state.isLoading = false;
        //mengambil data
        state.data = action.payload.data;
        // console.log(action.payload);
        //mengambil message
        state.message = action.payload.message;
      });
  },
});

export default studentSlice.reducer;

// membuat asyncThunk dan bisa dipisahkan biar rapih
