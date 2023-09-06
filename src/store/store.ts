import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import counter1Reducer from './slices/counter1Slice';

const reducer = {
    counter1Reducer,
}

export const store = configureStore({
    reducer,
    devTools: true
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();