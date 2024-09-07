import { AddTask } from "./AddTask"
import { TaskList } from "./TaskList"
import { TodoProvider } from "./TodoListContext"

export function TodoList() {
  return (
    <>
      <TodoProvider>
        <AddTask />
        <hr />
        <TaskList />
      </TodoProvider>
        
    </>
  )
}

