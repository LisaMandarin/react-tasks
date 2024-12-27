import { Typography } from "antd"
const { Link } = Typography

export function Home() {
    const items = [
        {path: "/todolist", name: "Todo List"},
        {path: "/callback", name: "useCallback"},
        {path: "/position-demo", name: "Position"},
        {path: "/display-demo", name: "Display"},
        {path: "/flex-demo", name: 'Flexbox'},
        {path: '/form-demo', name: 'Form'},
        {path: '/float-demo', name: 'Float'}
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
