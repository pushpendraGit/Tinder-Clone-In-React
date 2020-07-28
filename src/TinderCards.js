import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from './firebase';

function TinderCards(props) {
  const [people, setPeople] = useState([]);


  useEffect(() => {

  const unSubsCribe =  database.collection('people').onSnapshot(shnapshot => (

        setPeople(shnapshot.docs.map(doc => doc.data()))
   
    ))

  return  () => {

        return unSubsCribe() 
    }


  }, [])
  return (
    <div>
      <h1>TinderCards</h1>

      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
