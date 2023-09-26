import './assets/css/style.css'
import icone from './assets/img/agenda.png'
import { versao } from './constants'

const header = document.querySelector("header")
const img = document.createElement("img")

img.src = icone;
header?.prepend(img);

const versaoSpan = document.getElementById("versao")
versaoSpan!.textContent = versao