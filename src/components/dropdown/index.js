import * as React from 'react'
import './dropdown.css'

export default function Dropdown(props){
    return(
        <li className='items'>
            <a id='item'>{props.opcao}</a>
        </li>
    )
}

