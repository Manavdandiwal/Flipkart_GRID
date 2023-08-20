import React from "react";
import "./Left.css";
import { useState } from "react";

const Left = ({ data }) => {
    console.log("here");
    console.log(data);
    const [num, setNum] = useState(0);
    if (data && data.data && Array.isArray(data.data)) {
        return (
            <div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setNum((num - 1 + 4) % 4);
                    }}
                >
                    Previous
                </button>
                <div>
                    <img src={data.data[num].url} alt="fashion" />
                    {data.name ? <h3>{data.data[num].name}</h3> : <div></div>}
                    {data.price ? <h4>{data.data[num].price}</h4> : <div></div>}
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setNum((num + 1) % 4);
                    }}
                >
                    Next
                </button>
            </div>
        );
    } else {
        return (
            <div className="left">
                <img
                    src={process.env.PUBLIC_URL + "/fashionImage.jpg"}
                    alt="Fashion"
                    className="left-image"
                />
                <div className="image-overlay">
                    <div className="image-text">
                        Write the type of fashion you want to see in the search
                        bar at the top.
                    </div>
                </div>
            </div>
        );
    }
};

export default Left;
