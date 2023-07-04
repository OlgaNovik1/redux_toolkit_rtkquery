import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'



const rootReducer = combineReducers({
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RoootState = ReturnType<typeof rootReducer> //тип можно получить из редьюсера или из самого стора
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']