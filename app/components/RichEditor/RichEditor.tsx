'use client';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { FC, useState } from 'react';
import Tools from './Tools';

interface Props {}
const RichEditor: FC<Props> = () => {
	const [title, setTitle] = useState<string>('');
	const editor = useEditor({
		extensions: [
			StarterKit,
			TextAlign.configure({
				types: ['paragraph'],
			}),
			Underline,
			Placeholder.configure({ placeholder: 'Write something..' }),
		],
		editorProps: {
			attributes: {
				class:
					'prose prose-sm sm:prose-lg lg:prose-lg xl:prose-2xl outline-none  min-h-[60vh] ',
			},
		},
		immediatelyRender: false,
	});

	const handleSubmit = () => {
		console.log(editor?.getHTML());
		console.log(title);
	};

	return (
		<div className=" h-screen flex flex-col space-y-4 ">
			<form className="flex flex-col gap-4">
				<div className="">
					<label htmlFor="title" className="text-sm italic text-gray-500 ">
						Title
					</label>
					<input
						type="text"
						id="title"
						name="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full outline-none p-2 border rounded-lg"
						placeholder="Your title"
					/>
				</div>
				<div className="h-full ">
					<label htmlFor="title" className="text-sm italic text-gray-500">
						Journal Content
					</label>
					<div className="sticky top-0 bg-white z-50">
						<Tools editor={editor} />
					</div>
					<div className="flex-1 h-full p-2 border rounded-b-3xl ">
						<EditorContent editor={editor} />
					</div>
				</div>
				<button
					type="button"
					onClick={handleSubmit}
					className="bg-blue-500 p-2 w-full rounded-full text-white font-semibold"
				>
					Create New Post
				</button>
			</form>
		</div>
	);
};

export default RichEditor;
