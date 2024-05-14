import React, {Component} from "react";
import './estilo.css';

import biscoito from './assets/biscoito.png';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda con eles', 'O Bom-senso vale mais que muito conhecimento','O Riso é a menor distacia entre duas pessoas','Deixe de çlado as preocupaçoes e seja feiz','Realize o obvil, pense no improvavel e conquiste o imposivel','Acredite em milagres mais nao dependa deles','A maior Barreira do sucesso é o medo do fracasso'];
  }
  quebrarBiscoito(){
    let state = this.setState;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

}