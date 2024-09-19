import { UserForm } from "./UserForm"
import { UserList } from "./UserList"
import { Typography } from "antd"
const { Link } = Typography

export function FormDemo() {
    return (
        <>
            <UserForm />
            <UserList />
            <br />
            <Link href="/">Home</Link>
        </>
        
    )
}