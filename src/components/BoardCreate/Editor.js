import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CkEditor = (props) => {
  function setContent(contents) {
    props.content(contents);
  }
  return(
    <CKEditor 
      editor={ ClassicEditor }      
      config={{
        placeholder: "내용을 입력하세요.",
      }}
      height="500px"
      onReady={ (editor) => {
        // You can store the "editor" and use when it is needed.
        // console.log( 'Editor is ready to use!', editor );
        editor.editing.view.change((writer) => {
          writer.setStyle(
            "height",
            "600px",
            editor.editing.view.document.getRoot()
          )
        })
      } }
      onChange={setContent}
      
    ></CKEditor>
  )
}
export default CkEditor;