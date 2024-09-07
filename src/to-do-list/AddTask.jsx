import { Typography, Space, Input, Button } from "antd"
import { useContext } from "react"
import { TodoListContext } from "./TodoListContext"
const { Title} = Typography

export function AddTask() {
    const { task, setTask, setListData } = useContext(TodoListContext)
    const handleInput = (e) => {
        setTask(e.target.value)
      }
    const addTask = () => {
    if (task !== ''){
        setListData(current => [
        ...current,
        {
            id: crypto.randomUUID(),
            task: task,
            checked: false,
        }
        ])
        setTask('')
    }    
    }
    return (
        <>
            <div className="m-5 flex flex-col justify-center items-center">
                <Title>New Task</Title>
                <Space.Compact
                    className="w-96"
                >
                <Input 
                    value={task}
                    onChange={handleInput}
                />
                <Button 
                    type="primary"
                    onClick={addTask}  
                >
                    Add
                </Button>
                </Space.Compact>
            </div>
        </>
    )
}