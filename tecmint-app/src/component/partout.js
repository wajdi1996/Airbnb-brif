import React from './partout.css'
import bella from './images/bella.webp'
const cards = [
    {title : "Escapades en pleine nature", img : "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"},
    {title : "Des logements uniques", img : "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"},
    {title : "Logements entiers",  img : "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320"},
    {title : "Animaux de compagnie acceptés",  img : "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320"}
]
const Carta = (props) =>{
    return(
        <div className="conatiner">
            <img src={props.img} className="imgs" /> <br/>
            <a hred="" ><strong>{props.title}</strong> </a>
        </div>
    )
}

const Carts = () =>{
    return(
        <div className="conatiner">
            <h3 className="mt-5 mb-3 ml-4 titi"><strong>Chez vous, partout</strong></h3>
            <div className="row nassa">  
            
          {cards.map(ele =>
          <div>
        <Carta   img = {ele.img} title = {ele.title} />

          </div> )}

            </div>
<div className="content"> 
<img src={bella} className="bel" />
<div class="top-left"> <strong><h1 className="h2">Devenez hôte</h1> </strong>  <b/><p className="pa">Gagnez un revenu complémentaire et <br/> saisissez de nouvelles opportunités en <br/> louant votre logement.</p> <button className=" btnu">En savoir plus</button></div>


</div>

        </div>
    )
}
export default Carts