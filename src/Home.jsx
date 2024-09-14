import { Typography } from "antd"
const { Link } = Typography

export function Home() {
    const items = [
        {path: "/to-do-list/todolist", name: "Todo List"},
        {path: "/useCallback/callback", name: "useCallback"},
        {path: "/position/positiondemo", name: "Position"},
        {path: "/display/displaydemo", name: "Display"},
        {path: "/flex/flexdemo", name: 'Flexbox'}
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
