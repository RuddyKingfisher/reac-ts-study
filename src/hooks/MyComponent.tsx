import React, { useRef } from "react";

export class MyComponent extends React.Component {
    id: number = 1
    setId = (n: number) => {
        this.id = n;
    }
    printId = () => {
        console.log(this.id);
    }

    render() {
        return (
            <div>
                MyComponent
            </div>
        )
    }
}

// ref 안의 값이 바뀌어도 다시 렌더링되지는 않음..
export const RefSample = () => {
    const id = useRef<number>(1);
    const setId = (n: number) => {
        id.current = n;
    }
    const printId = () => {
        console.log(id.current);
    }
    return (
        <div>
            refsample
        </div>
    )
}