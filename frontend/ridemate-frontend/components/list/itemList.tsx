// searchedItemを一覧表示するコンポーネント

import { ItemHeader } from "@/api/data";
import SearchedItem from "./searchedItem/searchedItem";

export default function ItemList(props: { items: ItemHeader[] }) {

    return (
        <div className="grid grid-cols-2 gap-4 w-2/3">
            {props.items.map((item) => {
                const plainItem : string = JSON.stringify(item);
                return  <SearchedItem key={item.id} plainItem={plainItem} />
            })}
        </div>
    )
}