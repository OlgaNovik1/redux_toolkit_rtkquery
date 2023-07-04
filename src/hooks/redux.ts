import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RoootState } from "../store/store";
import { useSelector } from "react-redux";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RoootState> = useSelector;