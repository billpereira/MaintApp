import React from 'react'
import Container from '../Container'
import AgendaContent from './AgendaContent'

import agendaData from '../../data/agenda'

const agendaPages = [{
  title: "cS Agenda",
  page: <AgendaContent content={agendaData[0]}/>
},{
  title: "cB Agenda",
  page: <AgendaContent content={agendaData[1]}/>
},{
  title: "cT Agenda",
  page: <AgendaContent content={agendaData[2]}/>
},{
  title: "ABS/MS",
  page: <AgendaContent content={agendaData[3]}/>
}]
export default () => {
  return (
    <Container pages={agendaPages}/>
  )
}
