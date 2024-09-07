import { useState, createContext } from "react"
export const TodoListContext = createContext()

export function TodoProvider({ children }) {
    const [ task, setTask ] = useState('')
    const [ listData, setListData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ editedText, setEditedText ] = useState('')
    const [ editedId, setEditedId ] = useState('')

    return (
        <TodoListContext.Provider value={{
            task, setTask,
            listData, setListData,
            isLoading, setIsLoading,
            editedText, setEditedText,
            editedId, setEditedId
        }}>
            {children}
        </TodoListContext.Provider>
    )
}