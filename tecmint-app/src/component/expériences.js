import React from "react"


const cards = [
    {title : "Collection à la une : Envies d'évasion",  img : "https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320", description : "Voyagez depuis chez vous grâce aux expériences en ligne."},
    {title : "Expériences en ligne", img : "https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320" , description : "Activités interactives en direct, animées par des hôtes."},
    {title : "Expériences",img : "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320" , description : "Prenez part à des activités locales, où que vous soyez."}
    ]

    function Experience(props){
 return(
 <div className="mr-3">
 <img className=" my-2 experience-img" src={props.img}/>
 <a href={props.link} target="_blank"><p>{props.title}</p></a>
 <p className="exp-paragraph">{props.description}</p>
 </div>
 )
 }
 function Experiences() {
 return(
 <div className="container mb-5">
 <h1 className="mt-5 mb-3">Découvrez les expériences</h1>
 <h4 className="exp-paragraph" >Des activités uniques avec des experts locaux, en personne ou en ligne.</h4>
 <div className="d-flex">
 {cards.map(element =>
 <div>
 <Experience title = {element.title} link = {element.link} img = {element.img} description = {element.description}/>
 </div>
 )}
 </div>
 </div>
 )
 }
 export default Experiences