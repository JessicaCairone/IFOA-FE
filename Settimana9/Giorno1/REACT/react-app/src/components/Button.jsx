import {useState} from 'react'


//count è il contatore, lo inizializzo a 0, setCount la funzione che lo gestisce, le graffe richiamano una variabile
const Button = (props) => {
    const [count, setCount] = useState(props.count)
    return (
        //passo alla funzione il parametro che dev'essere modificato, cioè count
        <button onClick={() => setCount((count) => count + 1)}>  
        Il conteggio è {count} 
        </button>
    )
}

export default Button 