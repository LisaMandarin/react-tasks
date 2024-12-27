import { Route, Routes } from "react-router-dom"
import { TodoList } from "./to-do-list/TodoList"
import { Home } from "./Home"
import { Callback } from "./useCallback/Callback"
import { PositionDemo } from "./position/PositionDemo"
import { DisplayDemo } from "./display/DisplayDemo"
import { FlexDemo } from "./Flex/FlexDemo"
import { FormDemo } from "./form/FormDemo"
import { FloatDemo } from "./float/FloatDemo"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />}/>
        <Route path="/callback" element={<Callback />} />
        <Route path="/position-demo" element={< PositionDemo/>} />
        <Route path="/display-demo" element={<DisplayDemo />}/>
        <Route path="/flex-demo" element={<FlexDemo />}/>
        <Route path="/form-demo" element={<FormDemo />} />
        <Route path="/float-demo" element={<FloatDemo />} />
      </Routes>
    </>
  )
}