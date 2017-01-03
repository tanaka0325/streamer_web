import React from 'react'
import AltContainer from 'alt-container'

import Header from './components/Header'
import PoemContainer from './containers/PoemContainer'
import TaskContainer from './containers/TaskContainer'
import ReportContainer from './containers/ReportContainer'

import DateStore from './stores/DateStore'
import DateActions from './actions/DateActions'

const App = () => {
  return (
    <AltContainer
      stores={{ store: DateStore }}
    >
      <Header actions={DateActions} />
      <PoemContainer />
      <TaskContainer />
      <ReportContainer />
    </AltContainer>
  )
}

export default App
