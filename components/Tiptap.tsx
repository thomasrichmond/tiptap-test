"use client";

import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

export default function Tiptap() {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      StarterKit,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: `
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>25</td>
                <td>New York</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>30</td>
                <td>Los Angeles</td>
            </tr>
            <tr>
                <td>Mike</td>
                <td>28</td>
                <td>Chicago</td>
            </tr>
        </tbody>
    </table>
    <table><tr><td>2021</td><td></td><td></td><td></td></tr><tr><td>2022</td><td></td><td></td><td></td></tr></table><p>Et si disponible, merci de nous communiquer les résultats de 2023 (audités ou non audités). En cas de variations majeures (à la hausse comme à la baisse) / volatilité sur les résultats financiers, pouvez-vous nous en indiquer les justifications ?</p><h2>Middle office et exécution</h2><ol><li>Quelle politique mettez-vous en œuvre pour assurer la meilleure exécution des ordres ?</li><li>Comment veillez-vous à l’égalité de traitement entre les investisseurs dans l’allocation des ordres ?</li><li>Description de la liste des procédures mises en place dans le cadre de la meilleure exécution des ordres et de l’égalité de traitement entre les investisseurs.</li></ol><h2>Organisation et ressources dans le domaine de l’investissement</h2><ol><li>Organigramme de la société de gestion.</li><li>Quel est le nombre de collaborateurs ainsi que de professionnels de la gestion (gérants, analystes…) ? Quelle est leur ancienneté dans l’équipe ? Combien d’années d’expérience dans la gestion chacun des gérants possèdent-ils ?</li><li>Quels ont été les principaux changements dans les équipes de gestion au cours des 3 dernières années (changement de CIO, recrutement/ création de nouvelles équipes, départs et raisons des départs, …). Y a-t-il des équipes intervenant en support des gérants (stratégies, économistes, analystes actions ou crédit, analystes de risque, …) ?</li><li>Quelle politique mettez-vous en œuvre pour favoriser la stabilité des éléments clés de la société ?</li><li>Quels outils d’aide à la gestion utilisez-vous (outils de gestion quantitative…) ?</li></ol>
      `,
    immediatelyRender: false,
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
