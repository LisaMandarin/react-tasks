import { Button, InputNumber, Typography } from "antd";
import { useCallback, useState } from "react";
import { List } from "./List";
const { Link } = Typography

export function Callback() {
    const [ number, setNumber ] = useState(1)
    const [ dark, setDark ] = useState(false)

    const onChange = (value) => {
        setNumber(value)
    }
    const theme = {
        background: dark? "#333" : "#fff",
        color: dark? "#fff" : "#333"
    }

    const getItems = useCallback(() => {
        return [number, number+1, number+2]
    }, [number])

    return (
        <div className="flex flex-col w-full" style={theme}>
            <InputNumber 
                value={number}
                onChange={onChange}
                className="w-80 m-4 mx-auto"
            />
            <Button
                onClick={() => setDark(current => !current)}
                className="w-80 m-4 mx-auto"
            >
                Toggle Mode
            </Button>

            <List 
                getItems={getItems}
            />

            <Link 
                href="/"
                className="text-center"
            >
                Home
            </Link>
        </div>
    )
}