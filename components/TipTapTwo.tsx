"use client";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent } from "@tiptap/react";
import { useEditor } from "@tiptap/react";
import Typography from "@tiptap/extension-typography";
import React from "react";

export default function TipTapTwo() {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Typography],
    content: `
        <p>“I have been suffering from Typomania all my life, a sickness that is incurable but not lethal.”</p>
        <p>— Erik Spiekermann, December 2008</p>
      `,
    immediatelyRender: false,
  });

  return <EditorContent editor={editor} />;
}
