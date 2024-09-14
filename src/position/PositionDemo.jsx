import { Typography } from "antd"
const { Link } = Typography

export function PositionDemo() {

    return (
        <div className="flex flex-col">
            <ol className="m-3">
                <li>static: The default position; elements appear in the normal document flow.</li>
	            <li>relative: Elements are positioned relative to their normal position.</li>
	            <li>absolute: Elements are positioned relative to their nearest positioned ancestor (non-static).</li>
	            <li>fixed: Elements are positioned relative to the browser window and don’t move when scrolled.</li>
	            <li>sticky: A hybrid between relative and fixed. The element is positioned relative until a certain scroll point is reached, at which point it becomes fixed.</li>
            </ol>
            <div className="border border-black">
                <div className="w-[500px] h-[500px] bg-red-200"></div>
                <div className="w-[300px] h-[300px] bg-purple-800 relative top-[-300px] left-0">
                    <p className="text-white">position: relative</p>
                    <p className="text-white">top: 300px</p>
                    <p className="text-white">left: 0px</p>
                </div>
                <p>purple square remains in the layout</p>
            </div>
            <div className="border border-red-600">
                <div className="w-[500px] h-[500px] bg-red-200 relative">
                    <p>Parent div</p>
                    <p>position: relative</p>
                    <div className="text-white w-[300px] h-[300px] bg-purple-800 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                        <p>Child div</p>
                        <p>position: absolute</p>
                        <p>top: 50%</p>
                        <p>left: 50%</p>
                        <p>transform: translate(-50%, -50%)</p>
                        <p className="text-xs">	The element is positioned relative to the nearest positioned ancestor (anything with position: relative, absolute, or fixed). If no positioned ancestor is found, it’s placed relative to the element (or the document body)</p>
                        <p className="text-xs">The element is removed from the normal document flow, and other elements will behave as if it does not exist.</p>
                    </div>
                </div>
                <p>purple square doesn't remain in the layout</p>
            </div>
            <div className="bg-yellow-200 w-[200px] h-[100px] sticky bottom-3 ml-auto">
                <p>position: sticky</p>
                <p>bottom: 12px</p>
                <p>margin-left: auto</p>
            </div>
            <Link 
                href="/"
                className="text-center m-5"
            >
                Home
            </Link>
        </div>


    )
}