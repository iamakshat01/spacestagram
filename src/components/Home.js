import React,{useEffect,useState} from "react"
import Card from "./Card"

const apiUrl="https://api.nasa.gov/planetary/apod?api_key=FtmnlhvN8cW7a6TlGCOhBqTPkho7DivlXgVwlvRD&count=10"

function Home() {
    const [images,setImages] = useState([])
    
    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch(apiUrl)
            const result =await data.json()
            
            setImages(result)
        }
        fetchData();

    },[]);

    const allimages = images.map((image,i)=>{
        return (
            <div className="flex flex-col items-center" key={i}>
                <Card image={image}/>
            </div>
        )
    })

    return (
        <div>
            {allimages}
        </div>
    )
}

export default Home