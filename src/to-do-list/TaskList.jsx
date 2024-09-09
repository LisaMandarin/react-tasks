import { useContext } from "react"
import { TodoListContext } from "./TodoListContext"
import { useEffect } from "react"
import { Button, Typography, Checkbox, Input } from "antd"
import { Link } from "react-router-dom"
const { Title } = Typography 

export function TaskList() {
    const { listData, setListData, 
            editedId, setEditedId, 
            editedText, setEditedText,
            isLoading, setIsLoading
        } = useContext(TodoListContext)
    const handleCheckbox = (e, id) => {
        const updatedTasks = listData.map(task => {
          if (task.id === id) {
            return {...task, checked: e.target.checked}
          }
          return task
        })
        setListData(updatedTasks)
      }
    
      const deleteTask = (id) => {
        const updatedTasks = listData.filter(task => task.id !== id)
        setListData(updatedTasks)
      }
    
      const toggleEditable =(id, task) => {
        setEditedId(id)
        setEditedText(task)
      }
    
      const handleModify = (id) => {
        const updatedData = listData.map(task => {
          if (task.id === id) {
            return {...task, task: editedText}
          }
          return task
        })
        setListData(updatedData)
        setEditedId(null)
      }
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
        setListData(savedTasks)
        setIsLoading(false)
    }, [])

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('tasks', JSON.stringify(listData))  
        }
    }, [listData, isLoading])

    return (
        <div className="m-5 flex flex-col justify-center items-center">
            <Title>Task List</Title>
            <ol>
                {listData && listData.length > 0 ? (
                    listData.map(task => (
                        <li 
                            key={task.id}
                            className="list-decimal p-1 w-[500px]"
                        >
                            <div className="flex flex-row justify-between">
                                <Checkbox 
                                    className="mx-3"
                                    checked={task.checked}
                                    onChange={(e) => handleCheckbox(e, task.id)}  
                                />
                                <div className="flex flex-1 items-center">
                                    {task.checked ? (
                                    <p className="line-through">{task.task}</p>
                                    ): editedId === task.id ? (
                                    <Input 
                                        value={editedText}
                                        onChange={e => setEditedText(e.target.value)}
                                    />
                                    ): (
                                    <p>{task.task}</p>
                                    )}
                                </div>
                                <div>
                                    <Button 
                                        type="primary"
                                        onClick={() => deleteTask(task.id)}
                                        className="mx-3"
                                    >
                                        Delete
                                    </Button>
                                    { editedId === task.id ? (
                                    <Button
                                        onClick={() => handleModify(task.id)}
                                    >
                                        Done
                                    </Button>
                                    ) : (
                                    <Button
                                        onClick={() => toggleEditable(task.id, task.task)}
                                    >
                                        Modify
                                    </Button>
                                    )}
                                </div>
                            </div>
                        </li>
            ))
            ) : "No data"}
        </ol>
    </div>
    )
}