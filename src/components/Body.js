import React from "react";
import Right from "./Right";
import Left from "./Left";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Body.css";

function Body() {
    const [data, setData] = useState({});
    const [GenAIdata, setGenAIData] = useState({});
    const [relatedItems, setRelatedItems] = useState({});
    const [text, setText] = useState("");
    const [RelText, setRelText] = useState("");

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/api/items").then((response) => {
            setData(response.data);
            setRelatedItems(response.data);
        });
    }, []);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-title">FLIPKART</div>
                <div className="navbar-search">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Write your prompt here"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <button
                        className="search-button"
                        onClick={(e) => {
                            e.preventDefault();

                            const url = `http://127.0.0.1:5000/api/photos?query=${text}`;
                            const keywords = `http://127.0.0.1:5000/api/keywords?query=${text}`;
                            const related = `http://127.0.0.1:5000/api/related?query=${text}`;
                            axios.get(url).then((response) => {
                                setGenAIData(response.data);
                                console.log(GenAIdata);
                                console.log(response.data);
                            });

                            const rel = { data: [] };
                            axios.get(keywords).then((response) => {
                                let list = JSON.parse(response.data);
                                console.log(response);
                                list = list.keywords;
                                if (list) {
                                    for (const curr in data.data) {
                                        console.log(data.data[curr].tags);
                                        if (
                                            data.data[curr].tags.some((tag) =>
                                                list.includes(tag)
                                            )
                                        ) {
                                            rel.data.push(data.data[curr]);
                                        }
                                    }
                                }
                            });
                            axios.get(related).then((response) => {
                                setRelText(response.data);
                            });
                            setRelatedItems(rel);
                        }}
                    >
                        Search
                    </button>
                </div>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">
                            Home
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="body">
                <Left className="left" data={GenAIdata} />
                <Right
                    RelatedText={RelText}
                    className="right"
                    RelData={relatedItems}
                />
            </div>
        </div>
    );
}

export default Body;
