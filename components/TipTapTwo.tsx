"use client";

import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

export default function TiptapTwo() {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Bold, StarterKit],
    content: `
        <p>This isn’t bold.</p>
        <p>This is tip tap two.</p>

      `,
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="control-group">
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}>
            Toggle bold
          </button>
          <button
            onClick={() => editor.chain().focus().setBold().run()}
            disabled={editor.isActive("bold")}>
            Set bold
          </button>
          <button
            onClick={() => editor.chain().focus().unsetBold().run()}
            disabled={!editor.isActive("bold")}>
            Unset bold
          </button>
        </div>
      </div>
      <EditorContent editor={editor} />
    </>
  );
}
