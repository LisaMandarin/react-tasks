import { Route, Routes } from "react-router-dom"
import { TodoList } from "./to-do-list/TodoList"
import { Home } from "./Home"
import { Callback } from "./useCallback/Callback"
import { PositionDemo } from "./position/PositionDemo"
import { DisplayDemo } from "./display/DisplayDemo"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/to-do-list/todolist" element={<TodoList />}/>
        <Route path="/useCallback/callback" element={<Callback />} />
        <Route path="/position/positiondemo" element={< PositionDemo/>} />
        <Route path="/display/displaydemo" element={<DisplayDemo />}/>
      </Routes>
    </>
  )
}