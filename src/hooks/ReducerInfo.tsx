import React, { useReducer } from "react";

type InfoState = { name: string, nickname: string }

const reducer: React.Reducer<InfoState, EventTarget & HTMLInputElement> = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    };
}

export const ReducerInfo = (): React.ReactElement => {

    const [state, dispatch] = useReducer(reducer, {
        name: '', nickname: ''
    });

    const { name, nickname } = state;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름 : </b>{name}
                </div>
                <div>
                    <b>닉네임 : </b>{nickname}
                </div>
            </div>
        </div>
    )
}
