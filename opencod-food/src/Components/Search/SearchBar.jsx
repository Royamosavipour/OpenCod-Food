import React, { useState } from "react";

import "./SearchBar.css";
import { useNavigate } from "react-router";

export default function SearchBar() {
    const [term, setTerm] = useState("");
    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${term}`)

    };

    return (
        <div className="searchbar">
            <form onSubmit={handelSubmit}>
                <label htmlFor="search">Search:</label>
                <input
                    id="search"
                    type="text"
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </form>
        </div>
    );
}
