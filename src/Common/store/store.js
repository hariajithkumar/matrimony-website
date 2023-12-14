import { configureStore } from "@reduxjs/toolkit"
import CreateSlice from "../../Redux/CreateSlice"

export const store = configureStore ({
    reducer: {
        navButton : CreateSlice
    },
})