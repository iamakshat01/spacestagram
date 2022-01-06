import React,{useEffect,useState} from "react"

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
            <div key={i}>
                <h1>{image.title}</h1>
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