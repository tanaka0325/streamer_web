import React from 'react'

const Task = (props) => {
  const buttonStar = (props.task.priority === 'normal') ?
    <td className="is-icon" onClick={() => { props.actions.star(props.task) }}>
      <i className="fa fa-star-o" />
    </td>
    :
    <td className="is-icon" onClick={() => { props.actions.unStar(props.task) }}>
      <i className="fa fa-star" />
    </td>

  return (
    <tr>
      <td>{props.task.body}</td>
      {buttonStar}
      <td className="is-icon" onClick={() => { props.actions.exportToday(props.task) }}>
        {/* <button>exportToday</button> */}
        <i className="fa fa-share" />
      </td>
      <td className="is-icon" onClick={() => { props.actions.unplay(props.task) }}>
        {/* <button>unplay</button> */}
        <i className="fa fa-pause" />
      </td>
      <td className="is-icon" onClick={() => { props.actions.play(props.task) }}>
        {/* <button>play</button> */}
        <i className="fa fa-play" />
      </td>
      <td className="is-icon" onClick={() => { props.actions.done(props.task) }}>
        {/* <button>done</button> */}
        <i className="fa fa-check" />
      </td>
      <td className="is-icon" onClick={() => { props.actions.delete(props.task) }}>
        {/* <button>delete</button> */}
        <i className="fa fa-trash" />
      </td>
    </tr>
  )
}

export default Task
