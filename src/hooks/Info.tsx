import React, { useEffect, useState } from "react";

export const Info = (): React.ReactElement => {
    const [name, setName] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");

    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({
            name, nickname
        });
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    },
        [name]);

    const onChangeName: React.ChangeEventHandler<HTMLInputElement> = e => {
        setName(e.target.value);
    }

    const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value)
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
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