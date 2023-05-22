// rootへのリンクを持ったヘッダーを示す関数コンポーネント
// このコンポーネントは全てのページで使用される
import Link from "next/link"
import Image from "next/image"

export default function RideMateHeader() {
    return (
    // ヘッダーの背景は白に設定
    <nav className="flex items-center justify-between p-4 bg-white">
        {/* 左によったlinkを作成 */}
        <div className="flex items-center">
            <Link href="/" className="flex items-center">
                <>
                    <Image src="/RideMate.png" width={200} height={15} alt="logo" />
                </>
            </Link>
        </div>
        {/* 右によったlinkを作成 */}
        <div className="flex items-center space-x-4">
            <Link href="/search" className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </Link>
            <Link href="/post" className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            </Link>
        </div>
    </nav>
    )
}