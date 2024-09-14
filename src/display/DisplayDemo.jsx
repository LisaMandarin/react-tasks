import { Typography } from "antd"
const { Link, Title } = Typography

export function DisplayDemo() {

    return (
        <div>
            <div>
                <Title className="text-center">display: block / inline / inline-block</Title>
                <p><span className="text-red-500">Block element takes up the full width.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime, ad qui aperiam earum officia saepe quibusdam accusantium reiciendis vel quam alias esse cum numquam recusandae excepturi, a quas. Dicta asperiores quam perferendis! Pariatur, suscipit!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor nobis tempora cum debitis. Dolore dicta molestia 
                    <a href="#" className="text-blue-600 hover:bg-blue-600 hover:text-white p-4 m-4 outline">This is a link</a>
                    <span className="text-red-500">, which only takes up the necessary space.  However, inline element has no effects on width and height.  You can set the margin and padding, but it won't leave room for margin and padding, so it may overlay other elements.</span>
                </p>
                <div>
                    <p className="bg-yellow-200 inline-block w-80 m-4 p-4">
                        Button(inline-block)
                    </p>
                    <p className="bg-yellow-700 inline-block w-80 m-4 p-4 text-white ">Inline-block acts like inline element but allows you to set the width and height. It also leaves room for margins and paddings so that it won't overlap other elements</p>
                    <p className="bg-white inline-block w-[300px] m-4 p-4">The yellow div and the brown div have the same style.  Do not set height!!!</p>
                </div>
                <div>
                <p className="bg-yellow-200 inline-block w-80 h-80 m-4 p-4">
                    Button(inline-block)
                </p>
                <p className="bg-yellow-700 inline-block w-80 h-80 m-4 p-4 text-white ">Inline-block acts like inline element but allows you to set the width and height. It also leaves room for margins and paddings so that it won't overlap other elements</p>
                <p className="bg-white inline-block w-[300px] m-4 p-4">The yellow div and the brown div have the same style.  Do not set height!!!</p>
                </div>
            </div>
            <Link
                href="/"
                className="text-center m-5 block outline"
            >
                Home
            </Link>
        </div>
    )
}