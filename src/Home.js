import React from "react"; 
import { Link } from "react-router-dom";
const Home=({data})=>{

 
    return (
        <div className="container" >
        {
            data.map(
                (card,index)=>{return <div className="card"
                key={index}>
                    <h1>{card.title}</h1>
                    <p className="tag">{card.content}</p>
                    <Link className="tag" to={`/detail/${card.title}`}>View More</Link>
                </div>
                
                
            })
        }
        
    </div>
    )
}





export default Home;