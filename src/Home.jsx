import { Typography } from "antd"
const { Link } = Typography

export function Home() {
    const items = [
        {path: "/to-do-list/todolist", name: "Todo List"},
        {path: "/useCallback/practice", name: "useCallback"}
    ]
    return (
        <div className="flex flex-row gap-2 m-4">
            { items.map(item => (
                <Link
                    key={crypto.randomUUID} 
                    href={item.path}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}

{/* <Link href="/to-do-list/todolist">Todo List</Link>
<Link href="/useCallback/practice">useCallback</Link> */}