import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10").then((response) => {
      setUsers(response.data.results);
    });
    setShow(true);
  }, [show]);

  const userCount = users.length;
  const radius = 130;
  const center = { x: 250, y: 250 };
  let angle = 0;

  const changeCircle = () => {
    setShow(false);
  };



  return (
    <div className="App">
      <div className="circle">
       
        {users.map((user) => {
          
          const x = center.x + radius * Math.cos((angle * Math.PI) / 180);
          const y = center.y + radius * Math.sin((angle * Math.PI) / 180);
          angle += 360 / userCount;
          return (
            <div key={user.login.uuid} className="user" style={{ left: x, top: y }}>
              
              <img src={user.picture.large} alt={user.name.first} className="avatar" />

            </div>
          );
   
        })}
      </div>
      <img className="avatar me" src="https://avatars.githubusercontent.com/u/95706081?v=4" alt="profile" />
      <button onClick={changeCircle}>Change Circle</button>
    </div>
  );
}

export default App;
