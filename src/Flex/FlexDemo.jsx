import { Typography } from "antd"
import { useEffect, useState } from "react"
const { Link } = Typography

export function FlexDemo() {
    const [ divArray, setDivArray ] = useState([])
    useEffect(() => {
        setDivArray(Array.from({length: 5}, (_, i) => i+1))
        // Array.from takes an object and mapFn as params
        // Array.from(object, mapFunction, thisValue)
    }, [])
    
    return (
        <div>
            <div>flex gap-2 m-4 bg-yellow-50 flex-wrap</div>
            <div className="flex gap-2 m-4 bg-yellow-50 flex-wrap">
                {divArray && divArray.map((number) => (
                    <div key={number} className="outline p-4">
                        {number}
                    </div>
                ))}
                {divArray && divArray.map((number) => (
                    <div key={number} className="outline p-4">
                        {number}
                    </div>
                ))}
                {divArray && divArray.map((number) => (
                    <div key={number} className="outline p-4">
                        {number}
                    </div>
                ))}
            </div>
            <div>flex flex-col gap-2 m-4 bg-yellow-100</div>
            <div className="flex flex-col gap-2 m-4 bg-yellow-100">
                {divArray && divArray.map((number) => (
                    <div key={number} className="outline p-4">
                        {number}
                    </div>
                ))}
            </div>
            <div className="bg-yellow-200 flex justify-start gap-2 m-4">
                <div className="bg-gray-300 p-4 outline">flex flex-row</div>
                <div className="bg-gray-300 p-4 outline">justify-start</div>
            </div>
            <div className="bg-yellow-200 flex justify-end gap-2 m-4">
                <div className="bg-gray-300 p-4 outline">flex flex-row</div>
                <div className="bg-gray-300 p-4 outline">justify-end</div>
            </div>
            <div className="bg-yellow-200 flex justify-center gap-2 m-4">
                <div className="bg-gray-300 p-4 outline">flex flex-row</div>
                <div className="bg-gray-300 p-4 outline">justify-center</div>
            </div>
            <div className="bg-yellow-300 flex flex-col justify-start-start h-[300px] gap-2 m-4">
                <div className="bg-gray-300 p-4 outline">flex flex-col</div>
                <div className="bg-gray-300 p-4 outline">justify-start</div>
            </div>
            <div className="bg-yellow-300 flex flex-col justify-end h-[300px] gap-2 m-4">
                <div className="bg-gray-300 p-4 outline">flex flex-col</div>
                <div className="bg-gray-300 p-4 outline">justify-end</div>
            </div>
            <div className="bg-yellow-300 flex flex-col justify-center h-[300px] gap-2 m-4">
                <div className="bg-gray-300 p-4 outline">flex flex-col</div>
                <div className="bg-gray-300 p-4 outline">justify-center</div>
            </div>
            <div className="bg-yellow-400 h-[300px] flex flex-row justify-start items-start gap-2 m-4">
                <div className="outline bg-gray-300">flex flex-row</div>
                <div className="outline bg-gray-300">justify-start</div>
                <div className="outline bg-gray-300">items-start</div>
            </div>
            <div className="bg-yellow-400 h-[300px] flex flex-row justify-start items-end gap-2 m-4">
                <div className="outline bg-gray-300">flex flex-row</div>
                <div className="outline bg-gray-300">justify-start</div>
                <div className="outline bg-gray-300">items-end</div>
            </div>
            <div className="bg-yellow-400 h-[300px] flex flex-row justify-start items-center gap-2 m-4">
                <div className="outline bg-gray-300">flex flex-row</div>
                <div className="outline bg-gray-300">justify-start</div>
                <div className="outline bg-gray-300">items-center</div>
            </div>
            <div className="bg-yellow-400 h-[300px] flex flex-row justify-start items-stretch gap-2 m-4">
                <div className="outline bg-gray-300">flex flex-row</div>
                <div className="outline bg-gray-300">justify-start</div>
                <div className="outline bg-gray-300">items-stretch</div>
            </div>
            <div className="bg-yellow-500 h-[300px] flex flex-row justify-center items-center gap-2 m-4 relative">
                <span className="absolute top-0 left-0">flex flex-row justify-center items-center gap-2 m-4</span>
                {divArray && divArray.map((number) => (
                    <div key={number} className="bg-gray-300 outline">
                        {number}.
                        <span>ABC</span>
                    </div>
                ))}
            </div>
            <div className="bg-yellow-600 h-[200px] flex flex-col justify-end items-start m-4 relative">
                <div className="absolute top-0 left-0">flex flex-col justify-end items-start m-4</div>
                { divArray && divArray.map((number) => (
                    <div key={number} className="outline bg-gray-300">
                        {number}.
                        <span>ABCDE</span>
                    </div>
                ))}
            </div>
            <div className="bg-yellow-600 h-[200px] flex flex-col justify-end items-end m-4 relative">
                <div className="absolute top-0 left-0">flex flex-col justify-end items-end m-4</div>
                { divArray && divArray.map((number) => (
                    <div key={number} className="outline bg-gray-300">
                        {number}.
                        <span>ABCDE</span>
                    </div>
                ))}
            </div>
            <div className="bg-yellow-600 h-[200px] flex flex-col justify-end items-center m-4 relative">
                <div className="absolute top-0 left-0">flex flex-col justify-end items-center m-4</div>
                { divArray && divArray.map((number) => (
                    <div key={number} className="outline bg-gray-300">
                        {number}.
                        <span>ABCDE</span>
                    </div>
                ))}
            </div>
            <div className="m-4 flex gap-2 bg-yellow-700 text-white">
                <div className="outlin p-4 flex-grow">
                    Apple: flex-grow (take the extra space)
                </div>
                <div className="outline p-4">
                    Banana
                </div>
                <div className="outline p-4">
                    Celery
                </div>
                <div className="outline p-4">
                    Donut
                </div>
            </div>
            <div>flex-shrink takes away the width when there's not enough room</div>
            <div className="m-4 flex gap-2 bg-yellow-700 text-white">
                <div className="outlin p-4 basis-40 flex-grow">
                    Apple
                </div>
                <div className="outline p-4 basis-40 flex-grow">
                    Banana
                </div>
                <div className="outline p-4 basis-40 flex-grow">
                    Celery
                </div>
                <div className="outline p-4 flex-shrink">
                    Donut
                </div>
            </div>
            <Link href="/" className="block text-center m-4">Home</Link>
        </div>
    )
}