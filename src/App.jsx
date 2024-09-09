import { Route, Routes } from "react-router-dom"
import { TodoList } from "./to-do-list/TodoList"
import { Home } from "./Home"
import { Practice } from "./useCallback/practice"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/to-do-list/todolist" element={<TodoList />}/>
        <Route path="/useCallback/practice" element={<Practice />}/>
      </Routes>
    </>
  )
}