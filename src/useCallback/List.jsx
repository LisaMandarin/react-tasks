import { useEffect, useState } from "react"

export function List({getItems}) {
    const [ items, setItems ] = useState([])

    useEffect(() => {
        setItems(getItems())
    }, [getItems])

    return (
        <ul>
            { items.map(item => (
                <li key={item}>
                {item}
            </li>
            ))}
        </ul>
    )
}