// Item型からタイトルと日時だけを抜き出して表示するコンポーネントを作成する。
// 押下時にはshowItemを呼び出すようにする
// タイトルを太字、日時を薄字で表示する

import { useRouter } from "next/navigation";
import { ItemHeader } from "@/api/data";

export default function SearchedItem(props: { item: ItemHeader }) {
    const router = useRouter();
    const showItem = () => {
        router.push(`/item/${props.item.id}`);
    }
    return (
        <div className="cursor-pointer py-2 w-full bg-white rounded" onClick={showItem}>
            <div className="pl-2">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        {props.item.author}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{props.item.title}</div>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <p className="text-gray-600">{props.item.updatedAt}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}