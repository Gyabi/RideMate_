// APIとのやり取りで利用するデータ型を定義するファイル

// アイテムのデータ型
export class ItemHeader {
    id: string;
    title: string;
    updatedAt: string;
    author: string;
    constructor(id: string, title: string, updatedAt: string, author: string) {
        this.id = id;
        this.title = title;
        this.updatedAt = updatedAt;
        this.author = author;
    }
}

export class Item {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    author : string;

    constructor(id: string, title: string, content: string, createdAt: string, updatedAt: string, author: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.author = author;
    }
}