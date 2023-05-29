"use client";

import { useState } from "react";
import getItemHeadersByKeyword from "@/api/api";
import { ItemHeader } from "@/api/data";
import ItemList from "@/components/list/itemList";

export default function Search() {
    const [input, setInput] = useState<string>("");

    // 検索結果を保持する為のItem型配列
    const [items, setItems] = useState<ItemHeader[]>([]);

    function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    const searchItem = async() => {
        // apiにアクセスして検索結果を取得する
        const result = getItemHeadersByKeyword(input);
        result.then((items) => {
            setItems(items);
        });
    }

    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center py-3">
                <input className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" value={input} onChange={inputChange}/>
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={searchItem}>Search</button>
            </div>

            <div className="py-3 flex flex-col justify-center items-center">
                <ItemList items={items} />
            </div>
        </div>
    )
}