import { AddTask } from "./AddTask"
import { TaskList } from "./TaskList"
import { TodoProvider } from "./TodoListContext"
import { Typography } from "antd"
const { Link } = Typography

export function TodoList() {
  return (
    <>
      <TodoProvider>
        <AddTask />
        <hr />
        <TaskList />
      </TodoProvider>
      <Link 
        href='/'
        className="block text-center"
      >
        Home
      </Link>
    </>
  )
}

