import React, { Component } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { Divider } from 'semantic-ui-react';

export default class Wizzy extends Component {
  state = {}

  handleModelChange = (model) => {
    this.setState({
      model: model
    });
  }

  getConfig = () => ({
    attribution: false,
  })

  render() {
    return(
      <div>
        <FroalaEditor tag='textarea'
          onModelChange={this.handleModelChange}
          config={this.getConfig()}
        />

        <Divider horizontal content='Preview' />
        <FroalaEditorView model={this.state.model} />
      </div>
    )
  }
}