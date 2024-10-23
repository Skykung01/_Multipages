import React, { useState, useEffect } from 'react';
import './Animation.css';

const Field = () => {
  const fieldwidth = 600;
  const fieldheight = 400;
  const ballDiameter = 100;

  const [running, setRunning] = useState(true);
  const [runRight, setRunRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [speed, setSpeed] = useState(0);
  const [spe, setSpe] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const vx = 5;
  const vy = 5;

  const maxleft = fieldwidth - ballDiameter - 6;
  const maxtop = fieldheight - ballDiameter - 6;

  const toggleRunning = () => {
    setRunning(!running);
  };

  const getRandomNumber = () => {
    setSpeed(Math.floor(Math.random() * 31) - 15);
  };

  const resetActiveClasses = () => {
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
  };

  const changeBallImage = (imgUrl, elementId) => {
    document.getElementById('ball').style.backgroundImage = `url(${imgUrl})`;
    resetActiveClasses();
    document.getElementById(elementId).classList.add('active');
  };

  const calcute = () => {
    let newLeft = left;
    let newTop = top;

    if (runRight) {
      newLeft += vx;
      if (newLeft >= maxleft) {
        setRunRight(false);
        getRandomNumber();
      }
    } else {
      newLeft -= vx;
      if (newLeft <= 0) {
        setRunRight(true);
      }
    }

    if (goDown) {
      newTop += vy;
      if (newTop >= maxtop) {
        setGoDown(false);
        getRandomNumber();
      }
    } else {
      newTop -= vy;
      if (newTop <= 0) {
        setGoDown(true);
        getRandomNumber();
      }
    }

    setLeft(newLeft);
    setTop(newTop);
    setSpe(spe + speed);
  };

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        calcute();
      }, 25);

      return () => clearInterval(interval);
    }
  }, [running, left, top]);

  return (
    <div>
      <div id="field" style={{ width: fieldwidth, height: fieldheight }}>
        <div
          id="ball"
          style={{
            width: ballDiameter,
            height: ballDiameter,
            left: `${left}px`,
            top: `${top}px`,
            transform: `rotate(${spe}deg)`,
          }}
        />
      </div>
      <button id="run" onClick={toggleRunning}>
        {running ? 'Stop' : 'Run'}
      </button>
      <button id="bas" onClick={() => changeBallImage('https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png', 'bas')}>
        Basketball
      </button>
      <button id="bal" onClick={() => changeBallImage('https://w7.pngwing.com/pngs/248/249/png-transparent-american-football-football-team-football-sport-sports-equipment-football-team-thumbnail.png', 'bal')}>
        Football
      </button>
      <button id="vol" onClick={() => changeBallImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQEywJWOMYnEBI16tqGGqxh6DyDVKTG8A8w&s', 'vol')}>
        Volleyball
      </button>
      <button id="hum" onClick={() => changeBallImage('https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/287956487_1211927392892969_6413168520301304137_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEFi5ql8-x2ni7x2dEbzIe1rz0Na0aLnmavPQ1rRoueZjrGkvcYat7UHRzeYYBZlRVewOvG6b4s9X_4wmzzHLGq&_nc_ohc=Ut7Adczz4fYQ7kNvgGrHA4v&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=AiTHIGaiLYK9M51QqQTRhYC&oh=00_AYAFjyuZKr2178n8gqwxxruWp1m3KPXelzWkfwpfIhavwg&oe=671CA157', 'hum')}>
        Human
      </button>
      <button id="cart" onClick={() => changeBallImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzJjPa-3jdL6XAI0yqXBY8VzK_p5h0yQIkQ&s', 'cart')}>
        Cartoon
      </button>
    </div>
  );
};

export default Field;
