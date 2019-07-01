import React from 'react'

import NewIncident from './NewIncident'
import SearchIncident from './SearchIncident'
import Container from '../Container'

import volumeMap from '../../data/volumeMap'

const complexes = volumeMap.map(item=>({value:item.complex,label:item.complex}))

const IncidentPages = [
  {
    title: 'New Incident',
    page: <NewIncident complexes={complexes}/>,
  },
  {
    title: 'Search Incident',
    page: <SearchIncident />
  }
]

export default () => {
  // console.log(complexes)
  return (
    <Container pages={IncidentPages}/>
  )
}
