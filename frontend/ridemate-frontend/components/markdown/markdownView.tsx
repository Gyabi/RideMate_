// リアルタイムマークダウンview
// zenn-markdown-htmlを利用して入力しているマークダウンデータをリアルタイムにhtmlで表示する
import markdownHtml from 'zenn-markdown-html'
/* zenn-content-cssのimport */
import 'zenn-content-css';

export default function MarkdownView(props: { titleInput : string, onTitleInputChange : any, contentInput: string, onContentInputChange:any, onButtonClick:any }) {
    // 入力エリアとマークダウンviewを横並びで表示
    // 一番下に投稿ボタンを表示

    const html = markdownHtml(props.contentInput, {embedOrigin: 'https://embed.zenn.dev'});

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className='w-full p-2 flex'>
                <input className='flex-grow focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-4xl text-center font-sans rounded-md mx-1' type="text" value={props.titleInput} onChange={props.onTitleInputChange} placeholder='Title'/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.onButtonClick}>投稿</button>
            </div>
            <div className='h-full flex'>
                <div className='w-1/2 '>
                    <textarea className='w-full  h-full border border-gray-300 p-2 rounded-md' value={props.contentInput} onChange={props.onContentInputChange}/>
                </div>
                <div className='w-1/2 '>
                    <div className="znc w-full h-full break-all border-2 border-gray-300 rounded-md p-2 overflow-auto" dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            </div>
        </div>
    )
}