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

    // 空でない場合はタイトルにキーワードが含まれるものを返却
    let result : ItemHeader[] = [];
    dummyData.forEach((item) => {
        if (item.title.includes(keyword)) {
            result.push(item);
        }
    });
    
    // キーワードが空の場合は全キーワードを返却
    if (keyword === "") {
        result = dummyData;
    }

    return result;
}

// 引数のIDにあったデータを返却
export async function getItemById(id: string) : Promise<Item> {
    // ダミーデータを作って返却
    const dummyData : Item = new Item(id, "title-"+id, "# content-"+id, "2021-10-01", "2021-10-01", "author1");

    return dummyData;
}

// 最新のデータを30件返却
export async function getLatestItems() : Promise<ItemHeader[]> {
    // ダミーデータを作って返却
    const dummyData : ItemHeader[] = [
        new ItemHeader("id1", "title1", "2021-10-01", "author1"),
        new ItemHeader("id2", "title2", "2021-10-01", "author2"),
        new ItemHeader("id3", "title3", "2021-10-01", "author3"),
        new ItemHeader("id4", "title4", "2021-10-01", "author4"),
        new ItemHeader("id5", "title5", "2021-10-01", "author5"),
        new ItemHeader("id6", "title6", "2021-10-01", "author1"),
        new ItemHeader("id7", "title7", "2021-10-01", "author2"),
        new ItemHeader("id8", "title8", "2021-10-01", "author3"),
        new ItemHeader("id9", "title9", "2021-10-01", "author4"),
        new ItemHeader("id10", "title10", "2021-10-01", "author5"),
    ];

    return dummyData;
}
