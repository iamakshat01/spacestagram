import React,{useState} from "react";

function Card(props) {
    
    // toggle for readmore
    const [toggle,setToggle] = useState(false)
    
    // store likes
    const [liked,setLiked] = useState(() => {
        const locallikes=localStorage.getItem(props.image.url);
        if(locallikes)
        return 'red'
        else
        return 'none'
    });

    function shorten(str, maxLen, separator = ' ') {
        if (str.length <= maxLen) return str;
        return str.substr(0, str.lastIndexOf(separator, maxLen));
    }

    function handleLike() {
        if(liked==='red') {
            setLiked('none')
            localStorage.setItem(props.image.url,false);
        }
        else  {
            setLiked('red')
            localStorage.setItem(props.image.url,true)
        }
    }

    function handleClick() {
        setToggle(!toggle)
    }

    const image=props.image
    const short=shorten(image.explanation,95) // shortened description

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
                {toggle && <p className="leading-relaxed mb-3 text-gray-600">
                    {image.explanation}
                </p>}
                {!toggle && <p className="leading-relaxed mb-3 text-gray-600">
                   {short}
                </p>}
                <div className="flex items-center flex-wrap">
                    <button className="text-blue-800 inline-flex items-center md:mb-2 lg:mb-0" onClick={handleClick}>
                        {toggle && <span>Read Less</span>}
                        {!toggle && <span>Read More</span>}
                    </button>
                    <button className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto ml-auto leading-none text-sm pr-3 py-1" onClick={handleLike}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600 p-1" fill={liked} viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;
