import { UserForm } from "./UserForm"
import { UserList } from "./UserList"
import { Typography } from "antd"
const { Link } = Typography

export function FormDemo() {
    return (
        <>
            <UserForm />
            <hr />
            <UserList />
            <br />
            <Link href="/" className="flex justify-center">Home</Link>
        </>
        
    )
}