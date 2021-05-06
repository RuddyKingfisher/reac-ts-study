import { ChangeEvent, useReducer } from "react";
import { InfoState } from "./ReducerInfo";

const reducer: React.Reducer<InfoState, EventTarget & HTMLInputElement> = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    };
}

export function useInputs(initialForm: InfoState): [InfoState, (e: ChangeEvent<HTMLInputElement>) => void] {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(e.target);
    };
    return [state, onChange];
}