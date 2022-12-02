import React, { useEffect, useRef } from "react";
// import codemi from "codemirror";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { language } from "@codemirror/language";
import { EditorState, Compartment } from "@codemirror/state";


export const Editor = () => {
  useEffect(() => {
    let view = new EditorView({
      extensions: EditorView.theme({
       color: "orange"
      }),
      extensions: [basicSetup, javascript()],
      parent: document.getElementById("RealTimeCodeEditor"),
      
    });
  },[]);

  // const autoLanguage = EditorState.transactionExtender.of((tr) => {
  //   if (!tr.docChanged) return null;
  //   let docIsHTML = /^\s*</.test(tr.newDoc.sliceString(0, 100));
  //   let stateIsHTML = tr.startState.facet(language) == htmlLanguage;
  //   if (docIsHTML == stateIsHTML) return null;
  //   return {
  //     effects: languageConf.reconfigure(docIsHTML ? html() : javascript()),
  //   };
  // });

  // new EditorView({
  //   doc: 'console.log("hello")',
  //   extensions: [basicSetup, languageConf.of(javascript())],
  //   parent: document.body,
  // });

  //   const editorRef = useRef(null);
  //   useEffect(() => {
  //     async function init() {
  //         editorRef.current = Codemirror.fromTextArea(
  //             document.getElementById('realtimeEditor'),
  //             {
  //                 mode: { name: 'javascript', json: true },
  //                 theme: 'dracula',
  //                 autoCloseTags: true,
  //                 autoCloseBrackets: true,
  //                 lineNumbers: true,
  //             }
  //         );
  //     }
  //     init();
  // }, []);

  return (
    <div id="RealTimeCodeEditor" style={{backgroundColor:"#F5F5F5"}}>
      {/* <textarea id=""></textarea> */}
    </div>
  );
};
