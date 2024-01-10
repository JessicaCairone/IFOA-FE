import {Component} from 'react'

class ButtonClass extends Component {
//inizializzo lo state a 0; constructor è un costruttore base di una classe js
    constructor(props) {
        super(props) 
        this.state = {
            count: 0,
        }
    }
//funzione che incrementa lo stato
incrementCount = () => {
    //con prevState passo tutto l'oggetto state come parametro; la f entra nell'oggetto, si prende count e ritorna un nuovo oggetto con count incrementato
    this.setState((prevState) => {
        return {
            count: prevState.count + 1
        }
    })
}


    render() {
        return  (
            <button onClick={this.incrementCount}>
            Il conteggio del bottone classe è {this.state.count} 
            </button>
        )  
    } 
}
      
   