/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const simbolos = ["♥", "♦", "♠", "♣"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function generarCarta() {
  const simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];

  const cartaDiv = document.getElementById("carta");
  const topSymbol = document.getElementById("topSymbol");
  const bottomSymbol = document.getElementById("bottomSymbol");
  const valorDiv = document.getElementById("valor");

  topSymbol.innerText = simbolo;
  bottomSymbol.innerText = simbolo;
  valorDiv.innerText = valor;

  cartaDiv.classList.remove("corazones", "diamantes", "picas", "treboles");
  if (simbolo === "♥" || simbolo === "♦") {
    cartaDiv.classList.add(simbolo === "♥" ? "corazones" : "diamantes");
  } else {
    cartaDiv.classList.add(simbolo === "♠" ? "picas" : "treboles");
  }
}

window.onload = generarCarta;
