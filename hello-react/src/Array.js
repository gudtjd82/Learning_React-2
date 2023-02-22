import React, { useState } from "react";

const Array = () => {
    const [object, setObject] = useState({ a: 1, b: 1, c: 1 });
    const [array, setArray] = useState([1, 2, 3]);

    return (
        <div>
            <button
                onClick={() => {
                    let newObj = { ...object, b: object.b + 1 };
                    setObject(newObj);
                }}
            >
                changeOBJ
            </button>
            <h1>{object.b}</h1>
            <button
                onClick={() => {
                    let newArray = [...array];
                    for (let i = 0; i < newArray.length; i++) {
                        newArray[i] += 1234;
                    }
                    console.log(newArray);
                    setArray(newArray);
                }}
            >
                changeArray
            </button>
            <h1>{array.join(", ")}</h1>
        </div>
    );
};

export default Array;
