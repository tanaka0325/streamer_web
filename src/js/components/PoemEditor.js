import React from 'react'
import SimpleMDE from 'react-simplemde-editor'

const PoemEditor = (props) => {
  const extraKeys = {
    // 'Ctrl-Enter': () => { props.handleEditorSubmit() },
    'Cmd-Enter': () => { props.handleEditorSubmit() },
  }

  return (
    <div>
      <SimpleMDE
        onChange={props.handleEditorChange}
        value={props.value}
        extraKeys={extraKeys}
        options={{
          autofocus: false,
          spellChecker: false,
          indentWithTabs: false,
          status: false,
          toolbar: false,
        }}
      />
      <button onClick={props.handleEditorSubmit}>post</button>
    </div>
  )
}

export default PoemEditor
