import React from "react";

function Loading() {
    
    return (
        <div className="flex h-72 m-10 items-center justify-center space-x-2 animate-pulse">
            <div className="w-6 h-6 bg-blue-900 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-900 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-900 rounded-full"></div>
        </div>
    )
}

export default Loading;