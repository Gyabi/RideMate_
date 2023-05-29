"use client";

import { useState } from "react";
import MarkdownView from "@/components/markdown/markdownView"
import { postItem } from "@/api/api";
import { useRouter } from "next/navigation";

export default function Post() {
    const [titleInput, setTitleInput] = useState("");
    const [contentInput, setContentInput] = useState("");
    const router = useRouter();

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleInput(e.target.value);
    }

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContentInput(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await postItem(titleInput, contentInput, "test");
        router.push("/");
    }

    return (
        <div>
            <MarkdownView titleInput={titleInput} onTitleInputChange={handleTitleChange} contentInput={contentInput} onContentInputChange={handleContentChange} onButtonClick={handleSubmit} />
        </div>
    )
}