import React from "react"; 
import { useParams,useNavigate } from "react-router-dom";
import Html from './Details/Html';
import Css from './Details/Css';
import Js from './Details/Js';
import MyReact from './Details/MyReact';
import Vue from './Details/Vue';
import Angular from './Details/Angular';

const Detail=({ data })=>{

    const {title}=useParams();
    const redirect=useNavigate();

    return(
        <div className="detail">
            {
                data
                .filter(
                    (card)=>{return card.title===title}
                ).map(
                    (card,index)=>{
                        return (
                        <div 
                        className="item-module"
                        key={index}>
                            <span 
                            className="close"
                            onClick={()=>{redirect('/',{replace:'true'})}}
                            >×</span>
                            <h1>{card.content}</h1>
                            {card. title==='HTML' && <Html/>}
                            {card. title==='CSS'  && <Css/>}
                            {card. title==='JavaScript' && <Js/>}
                            {card. title==='React' && <MyReact/>}
                            {card. title==='Vue' && <Vue/>}
                            {card. title==='Angular' && <Angular/>}
                        </div>
                        )
                    }
                )
            }
          
           
        </div>
    )
}

export default Detail;