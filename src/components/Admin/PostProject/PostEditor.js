import React, {Component} from 'react';
import { render } from 'react-dom';
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class EditorContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange: Function = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
    });
  };

  render(){
    const { editorState } = this.state;
    return <div className='editor'>
      <Editor

        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}    
        toolbar={{
          inline: { inline: true },
          list: { inDropdown: true },
          textAlign: { inline: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        //   image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
        }}
      />
    </div>
  }
}

export default EditorContainer