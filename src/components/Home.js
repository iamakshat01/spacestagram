import React,{useEffect,useState} from "react"
import Card from "./Card"
import Loading from "./Loading"

const apiUrl="https://api.nasa.gov/planetary/apod?api_key=FtmnlhvN8cW7a6TlGCOhBqTPkho7DivlXgVwlvRD&count=10"

function Home() {
    // storing images here
    const [images,setImages] = useState([])
    const [loading, setLoading] = useState(true)
    
    //fetching images
    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch(apiUrl)
            const result =await data.json()
            setImages(result)
            setLoading(false)
        }
        fetchData();

    },[]);

    // creating list of images
    const allimages = images.map((image,i)=>{
        return (
            <div className="flex flex-col items-center" key={i}>
                <Card image={image}/>
            </div>
        )
    })

    if(loading) {
        return (
            <Loading/>
        )
    }
    else {
        return (
            <div>
                {allimages}
            </div>
        )
    }
    
}

export default Home