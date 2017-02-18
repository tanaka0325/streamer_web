import alt from '../alt'
import TaskActions from '../actions/TaskActions'

class TaskStore {
  constructor() {
    this.bindActions(TaskActions)
    this.tasks = []
    this.loading = false
  }

  onFetched(tasks) {
    this.loading = false
    this.tasks = tasks
  }

  onAdded(task) {
    this.tasks.push(task)
  }

  onPlay(playTask) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === playTask.id) { task.status = 'doing' }
      return task
    })
  }

  onUnplay(playTask) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === playTask.id) { task.status = 'not_yet' }
      return task
    })
  }

  onDone(doneTask) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === doneTask.id) { task.status = 'done' }
      return task
    })
  }

  onExportToday(exportTask) {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== exportTask.id
    })
  }

  onDelete(taskToDestroy) {
    this.tasks = this.tasks.filter((task) => {
      return task !== taskToDestroy
    })
  }
}

export default alt.createStore(TaskStore, 'TaskStore')
