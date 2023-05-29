import { getLatestItems } from "@/api/api"
import ItemList from "@/components/list/itemList";
import { ItemHeader } from "@/api/data";

export default async function Default() {
  // 最新のデータを取得してリスト表示
  let datas:ItemHeader[] = [];

  await getLatestItems().then((items) => {
    datas = items;
  });


  return (
    <div className="flex flex-col justify-center">
      <div className="py-3 flex flex-col justify-center items-center">
        <ItemList items={datas} />
      </div>
    </div>
  )     
}