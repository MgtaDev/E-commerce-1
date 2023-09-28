import React from 'react'
import axios from 'axios';
import { response } from 'express';

const Lois = () => {

    const endpoint = 'https://pokeapi.co/api/v2/pokemon/1/'
    const bulbasaur = axios(endpoint).then(response.data)



  return (
    <div>Lois</div>
  )
}

export default Lois;