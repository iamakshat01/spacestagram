import React,{useState} from "react";

function Card(props) {
    const [toggle,setToggle] = useState(false)
    
    function shorten(str, maxLen, separator = ' ') {
        if (str.length <= maxLen) return str;
        return str.substr(0, str.lastIndexOf(separator, maxLen));
    }
    
    function handleClick() {
        setToggle(!toggle)
    }

    const image=props.image
    const short=shorten(image.explanation,95)
    
    return (
        <div className="h-full w-full md:w-2/3 lg:w-1/4 m-2 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="h-60 w-full" src={image.url} alt={image.title}/>
            <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {image.date}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {image.title}
                </h1>
                {toggle && <p className="leading-relaxed mb-3">
                    {image.explanation}
                </p>}
                {!toggle && <p className="leading-relaxed mb-3">
                   {short}
                </p>}
                <div className="flex items-center flex-wrap">
                    <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" onClick={handleClick}>
                        Read More
                    </button>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        Like
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card;
