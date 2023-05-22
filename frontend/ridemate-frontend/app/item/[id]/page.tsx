// アイテムidに応じて格納された情報を読みだして表示するページ
export default function ItemPage({params}:{params:{id:string}}) {
    return (
        <div>
            <h1>Item {params.id}</h1>
        </div>
    )
}