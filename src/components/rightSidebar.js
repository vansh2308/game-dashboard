import React from "react";
import trophy from "./../static/trophy.jpeg"
import esport from "./../static/esport.png"



export default function RightSidebar(props) {
  let statsList = [
    {
      rank: 1,
      user: "vanshu",
      coins: 2500
    },
    {
      rank: 2,
      user: "vanshu",
      coins: 2500
    },
    {
      rank: 3,
      user: "vanshu",
      coins: 2500
    },
    {
      rank: 4,
      user: "vanshu",
      coins: 2500
    },
    {
      rank: 5,
      user: "vanshu",
      coins: 2500
    },
    {
      rank: 6,
      user: "vanshu",
      coins: 2500
    },
    {
      rank: 7,
      user: "vanshu",
      coins: 2500
    },
    {
      rank: 8,
      user: "vanshu",
      coins: 2500
    },
    {
      rank: 9,
      user: "vanshu",
      coins: 2500
    },
    {
      rank: 10,
      user: "vanshu",
      coins: 2500
    },
  ]

  return (
    <div className="right-sidebar" style={{ borderColor: props.theme.sec, display: 'flex', flexDirection: "column", rowGap: "3vh", color: props.theme.font }}>

      <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginBottom: "1vh" }}>
        <h2 style={{ width: "60%" }}>Watch and Earn Coins</h2>
        <div style={{ height: "50px", aspectRatio: "1/1", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={trophy} />
        </div>
      </div>


      <div>
        <Stats details = {{rank: "Rank", user: "User", coins: "Coins"}}></Stats>
        {statsList.map((stat) => {
          return (
            <Stats details = {stat}/>
          )
        })}
      </div>



      <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", flexDirection:"column"}}>
        <h2 style={{ width: "100%" }}>Live E Sport matches</h2>
        <img src={esport} style={{width: "100%", aspectRatio: "1/1", borderRadius: "10px", marginTop: "1vh"}}></img>
      </div>

    </div>
  )

}


function Stats(props) {
  return (
    <div className="stats">
      <div>{props.details.rank}</div>
      <div>{props.details.user}</div>
      <div>{props.details.coins}</div>
    </div>
  )
}


