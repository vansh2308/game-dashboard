import React from 'react'
import { useState, useRef, useEffect } from 'react'
import slidebg0 from "./../static/slideshowbg0.jpg"
import slidebg1 from "./../static/slideshowbg1.jpg"
import slidebg2 from "./../static/slideshowbg2.jpg"
import { BsFillPersonFill } from "react-icons/bs"


export default function Main(props){
  const myRef = useRef(null)
  const clrs = [slidebg0, slidebg1, slidebg2];
  const [i, setI] = useState(0);

  useEffect(()=>{    
    const timer = setInterval(()=>{
      console.log(myRef.current.style);

      myRef.current.style.background = `url(${clrs[i]})`;
      setI((i+1)%3);
    }, 2000);

    return () => {
      if(timer) clearInterval(timer);
    }
  }, [i])



  let cat_list = [
    {
      name: "Valorant",
      subs: "26k",
      img: require("./../static/cat0.png")
    },
    {
      name: "Valorant",
      subs: "26k",
      img: require("./../static/cat1.png")
    },
    {
      name: "Valorant",
      subs: "26k",
      img: require("./../static/cat2.png")
    },
    {
      name: "Valorant",
      subs: "26k",
      img: require("./../static/cat3.png")
    },
    {
      name: "Valorant",
      subs: "26k",
      img: require("./../static/cat4.png")
    }
  ]
  


  let subs_list = [
    {
      img: require('./../static/sub0.png')

    },
    {
      img: require('./../static/sub1.png')

    },
    {
      img: require('./../static/sub2.png')

    },
    {
      img: require('./../static/sub3.png')

    },

  ]



  return(
    <div className='main'>
      
      <div className='slideshow-container' ref={myRef} style={{background: `url(${slidebg0})`}}>
        <div style={{background: "linear-gradient(transparent, #000000ab)", position:"absolute", width:"100%", height:"100%"}}></div>
        <div style={{fontSize: "1.8rem", fontWeight: "700", position: "absolute", zIndex: 2, bottom: "2rem", left: "2rem"}}> 
          <span style={{fontSize: "2.8rem"}}>Respawn</span> <br/> your Reality 
        </div>
      </div>



      <span style={{fontWeight: 600, color: props.theme.font}}>Top categories</span>
      <div style={{display: 'flex', columnGap: "15px", width: "fit-content", overflowX:"scroll", margin: "2vh 0 4vh 0", position: "relative"}}>
        {cat_list.map((cat) => {
          return(
            <CategoryTile theme={props.theme} details={cat}/>
          )
        })}
      </div>

      <span style={{fontWeight: 600, color: props.theme.font}}>Subscriptions</span>
      <div style={{}} className='subs-container'>
        {subs_list.map((item) => {
          return(
            <SubsTile theme={props.theme} details={item}/>
          )
        })}
      </div>



      
    </div>
  )
}



function CategoryTile(props){

  return(
    <div className='category-tile' style={{color: props.theme.font}}>
      <div className='img-container' style={{backgroundImage: `url(${props.details.img})`}}></div>
      <div style={{display: 'flex', fontSize: '0.8rem', fontWeight: "500", justifyContent: "space-between", padding: "0 3px"}}>
        <span> {props.details.name} </span>
        <div style={{display: 'flex', alignItems: "center", columnGap: "3px"}}>
          <BsFillPersonFill/>
          <span>{props.details.subs}</span>
        </div>
      </div>
    </div>
  )
}



function SubsTile(props){
  return(
    <div className='subs-tile' style={{color: props.theme.font}}>
      <div className='img-container' style={{backgroundImage: `url(${props.details.img})`}}></div>

      <div style={{display: 'flex', marginTop: "10px", alignItems: 'center', columnGap: "10px"}}>
        <div style={{aspectRatio: 1/1, width: "40px", borderRadius: "50%", background: "grey"}} />
        <div style={{display: 'flex', flexDirection: "column", overflow: "hidden", width: "80%"}}>
          <h3 style={{fontSize: "1rem", overflow:"hidden"}}> Lets make some mess</h3>
          <span style={{fontSize: "0.7rem"}}> @NickMarcs </span>
        </div>
      </div>
    </div>
  )
}