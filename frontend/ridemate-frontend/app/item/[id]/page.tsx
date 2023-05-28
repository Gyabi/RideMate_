"use client";

// アイテムidに応じて格納された情報を読みだして表示するページ
// zenn-markdown-htmlを利用して入力しているマークダウンデータをリアルタイムにhtmlで表示する
import markdownHtml from 'zenn-markdown-html'
/* zenn-content-cssのimport */
import 'zenn-content-css';
import { useEffect, useState } from 'react';
import { getItemById } from '@/api/api';

export default function ItemPage({params}:{params:{id:string}}) {
    // 数式の装飾を入れるためのEffect
    useEffect(() => {
        import('zenn-embed-elements');
    }, []);

    const [title, setTitle] = useState<string>("");
    const [html, setHtml] = useState<string>("");

    // マウント時にのみ非同期的に実行されるようにする
    useEffect(() => {
        const fetchData = async () => {
            // APIを用いてアイテムidに応じたマークダウンを取得する
            // IDを整理
            const id : string = decodeURIComponent(params.id);
            // データを取得するAPIを呼び出す
            getItemById(id).then((item) => {        
                // タイトルも変数化して表示する
                setTitle(item.title);
                setHtml(markdownHtml(item.content, {embedOrigin: 'https://embed.zenn.dev'}));
            });

        }
        fetchData();
    }, [])
    
    
    
    return (
        <div className="min-h-screen flex flex-col justify-center items-center ">
            <h1 className='text-2xl my-3'>{title}</h1>
            <div className='bg-white flex-grow rounded-md shadow-lg w-6/12 min-w-[500px]'>
                {/* break-allで自動改行を行う */}
                <div className='znc mx-5 my-5 break-all' dangerouslySetInnerHTML={{__html: html}}></div>
            </div>
        </div>

    )
}