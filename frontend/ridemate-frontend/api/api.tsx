// 汎用APIをコールする関数を定義するファイル
import { Item, ItemHeader } from './data';

// 引数のキーワードにあったデータを返却
export default async function getItemHeadersByKeyword(keyword: string) : Promise<ItemHeader[]> {
    // ダミーデータを作って返却
    const dummyData : ItemHeader[] = [
        new ItemHeader("id1", "title1", "2021-10-01", "author1"),
        new ItemHeader("id2", "title2", "2021-10-01", "author2"),
        new ItemHeader("id3", "title3", "2021-10-01", "author3"),
        new ItemHeader("id4", "title4", "2021-10-01", "author4"),
        new ItemHeader("id5", "title5", "2021-10-01", "author5"),
    ];

    return dummyData;
}

// 引数のIDにあったデータを返却
export async function getItemById(id: string) : Promise<Item> {
    // ダミーデータを作って返却
    const dummyData : Item = new Item(id, "title-"+id, "# content-"+id, "2021-10-01", "2021-10-01", "author1");

    return dummyData;
}

