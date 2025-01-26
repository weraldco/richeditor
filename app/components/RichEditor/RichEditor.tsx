'use client';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { EditorContent, EditorProvider, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { FC } from 'react';
import Tools from './Tools';

interface Props {}
const RichEditor: FC<Props> = () => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			TextAlign.configure({
				types: ['paragraph'],
			}),
			Underline,
		],
		editorProps: {
			attributes: {
				class:
					'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl outline-none',
			},
		},
		content: '<h1>Hello world <strong>How are you?</strong></h1>',
	});
	return (
		<div>
			<Tools editor={editor} />
			<EditorContent editor={editor} />
			{/* <EditorProvider
				extensions={[StarterKit]}
				content="<h1>Hello world <strong>How are you?</strong></h1>"
			/> */}
		</div>
	);
};

export default RichEditor;
