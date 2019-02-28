import { createGlobalStyle } from 'styled-components'
import theme from 'theme'

//<link href="https://fonts.googleapis.com/css?family=Nanum+Gothic" rel="stylesheet">

export const GlobalStyles = createGlobalStyle`
  body, p, h1, h2 {
    font-family: 'Nanum Gothic', sans-serif;
    background: #333;
    color: white;
  }

  body {
    margin: 0;
  }

/** -------------------------------------------------**/
/** -------------------------------------------------**/
  /* all this below is just for the loader */
/** -------------------------------------------------**/
/** -------------------------------------------------**/
  #beer_text {
  font-family: 'futura';
  color: white;
  /* letter-spacing: 20px; */
  font-size: 20px;
  position: absolute;
  top: 105px;
  left: 370px;
  animation: blink 1s linear infinite;
}

@keyframes blink{
0%{opacity: 0;}
50%{opacity: .5;}
100%{opacity: 1;}
}

#hetic {
  color: #6fb400;
}
#text {
  position: absolute;
  top: 245px;
  left: 150px;
  font-family: "futura std";
  color: white;
}

#glass {
  width: 70px;
  height: 90px;
  background: transparent;
  border: solid 3.5px white;
  border-top: none;
  border-radius: 0 0 10px 10px;
  position: absolute;
  top: 100px;
  left: 200px;
  overflow: hidden;
  transform: rotate(-20deg);
  -webkit-animation: glass 10s infinite;
}
#poignet {
  width: 30px;
  height: 55px;
  background: transparent;
  border: solid 3.5px white;
  position: absolute;
  top: 92px;
  left: 270px;
  border-radius: 0 16px 16px 0;
  border-left: none;
  transform: rotate(-20deg);
  -webkit-animation: poignet 10s infinite;
}
#beer {
  width: 58px;
  height: 84px;
  background: transparent;
  position: absolute;
  left: 6px;
  top: 0px;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
}
#beer::before {
  content: "";
  width: 250px;
  height: 250px;
  background: #e8b504;
  position: absolute;
  top: 83px;
  left: -190px;
  transform: rotate(40deg);
  -webkit-animation: beer 10s infinite;
}
#mousse_1 {
  position: absolute;
  top: 92px;
  left: 198px;
  z-index: 4;
}
#mousse_1::before {
  content: "";
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  -webkit-animation: mousse 10s infinite;
}
#mousse_1::after {
  content: "";
  width: 17px;
  height: 17px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 10px;
  -webkit-animation: mousse 10s infinite;
}
#mousse_2 {
  position: absolute;
  top: 92px;
  left: 212px;
  z-index: 4;
}
#mousse_2::before {
  content: "";
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  -webkit-animation: mousse 10s infinite;
}
#mousse_2::after {
  content: "";
  width: 17px;
  height: 17px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: 10px;
  -webkit-animation: mousse 10s infinite;
}
#mousse_3 {
  position: absolute;
  top: 92px;
  left: 228px;
  z-index: 4;
}
#mousse_3::before {
  content: "";
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  -webkit-animation: mousse 10s infinite;
}
#mousse_3::after {
  content: "";
  width: 17px;
  height: 17px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 15px;
  -webkit-animation: mousse 10s infinite;
}
#mousse_4 {
  position: absolute;
  top: 92px;
  left: 242px;
  z-index: 4;
}
#mousse_4::before {
  content: "";
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  -webkit-animation: mousse 10s infinite;
}
#mousse_4::after {
  content: "";
  width: 17px;
  height: 17px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 10px;
  -webkit-animation: mousse 10s infinite;
}
#mousse_5 {
  position: absolute;
  top: 92px;
  left: 257px;
  z-index: 4;
  -webkit-animation: mousse 10s infinite;
}
#mousse_5::before {
  content: "";
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
}
#mousse_volante {
  position: absolute;
  top: 85px;
  left: 212px;
  z-index: 4;
}
#mousse_volante::before {
  content: "";
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  position: absolute;
  -webkit-animation: mousse_volante 10s infinite;
}
#mousse_volante::after {
  content: "";
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 40px;
  -webkit-animation: mousse_volante 10s infinite;
}
#mousse_interieur {
  position: absolute;
  top: 55px;
  left: 218px;
  z-index: 4;
  opacity: 0.9;
}
#mousse_interieur::before {
  content: "";
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  position: absolute;
  -webkit-animation: mousse_interieur 10s infinite;
}
#mousse_interieur::after {
  content: "";
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 30px;
  -webkit-animation: mousse_interieur 5s infinite;
}
#mousse_interieur_2 {
  position: absolute;
  top: 235px;
  left: 225px;
  z-index: 4;
  opacity: 0.9;
}
#mousse_interieur_2::before {
  content: "";
  width: 7px;
  height: 7px;
  background: white;
  border-radius: 50%;
  position: absolute;
  -webkit-animation: mousse_interieur 10s infinite;
}
#mousse_interieur_2::after {
  content: "";
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 17px;
  -webkit-animation: mousse_interieur 5s infinite;
}
#mousse_interieur_3 {
  position: absolute;
  top: 45px;
  left: 232px;
  z-index: 4;
  opacity: 0.9;
}
#mousse_interieur_3::before {
  content: "";
  width: 9px;
  height: 9px;
  background: white;
  border-radius: 50%;
  position: absolute;
  -webkit-animation: mousse_interieur 10s infinite;
}
#mousse_interieur_3::after {
  content: "";
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  left: 12px;
  -webkit-animation: mousse_interieur 5s infinite;
}
#mousse_interieur_4 {
  position: absolute;
  top: 41px;
  left: 238px;
  z-index: 4;
  opacity: 0.9;
}
#mousse_interieur_4::before {
  content: "";
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  position: absolute;
  -webkit-animation: mousse_interieur 10s infinite;
}
#mousse_interieur_4::after {
  content: "";
  width: 5.5px;
  height: 5.5px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 28px;
  left: 2px;
  -webkit-animation: mousse_interieur 5s infinite;
}
/* ANIMATIONS */
@-webkit-keyframes beer {
  0% {
    transform: translateY(-5);
  }
  17% {
    transform: translateY(-82px);
  }
  100% {
    transform: translateY(-82px);
  }
}
@-webkit-keyframes glass {
  0% {
    transform: rotate(-20deg);
  }
  17% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@-webkit-keyframes poignet {
  0% {
    transform: rotate(-20deg);
  }
  17% {
    transform: rotate(0deg) translateX(5px) translateY(20px);
  }
  100% {
    transform: rotate(0deg) translateX(5px) translateY(20px);
  }
}
@-webkit-keyframes mousse {
  0% {
    transform: scale(0);
  }
  10% {
    transform: scale(0);
  }
  20% {
    transform: scale(1);
  }
}
@-webkit-keyframes mousse_volante {
  0% {
    transform: scale(0) translateY(0px);
  }
  10% {
    transform: scale(0) translateY(0px);
  }
  20% {
    transform: scale(1) translateY(-20px);
  }
  40% {
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(-80px);
    opacity: 0;
  }
}
@-webkit-keyframes mousse_interieur {
  0% {
    transform: scale(0) translateY(0px);
  }
  20% {
    transform: scale(0) translateY(0px);
  }
  40% {
    transform: scale(1) translateY(-60px);
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(-60px);
    opacity: 0;
  }
}

`
