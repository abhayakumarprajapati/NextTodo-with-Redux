import { createAppSlice } from "@/lib/createAppSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";


interface Product {

    id: string;
    title: string;
    price: number;
    description: string;
    images: string[];

}

interface ProductState {
    productlist: Product[];
    loading: boolean;
    error: string | null;
}


let initialState: ProductState = {

    productlist: [],
    loading: false,
    error: null

}


export const fetchProductlist = createAsyncThunk("product/fetchproductlist", async (_, { dispatch }) => {


    dispatch(fetchProductlistStart())
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        dispatch(fetchProductlistSuccess(data?.products))
    } catch (error: any) {
        dispatch(fetchProductlistFail(error?.message))
    }


})

export const productSlice = createAppSlice({
    name: "product",
    initialState,
    reducers: {

        fetchProductlistStart(state) {

            state.loading = true

        },
        fetchProductlistSuccess(state, action) {

            state.loading = false;
            state.productlist = action.payload ?? []

        },
        fetchProductlistFail(state, action) {
            state.loading = false;
            state.error = action.payload
        }



    }
})

export const { fetchProductlistStart, fetchProductlistSuccess, fetchProductlistFail } = productSlice.actions;

export default productSlice.reducer
