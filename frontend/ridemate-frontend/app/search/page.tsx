"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
    const router = useRouter();
    const [input, setInput] = useState<string>("")

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const showItem = () => {
        router.push(`/item/${input}`);
    }

    return (
        <div>
            <h1>Search</h1>
            <input type="text" value={input} onChange={inputChange}/>
            <button onClick={showItem}>Search</button>
        </div>
    )
}