import React from 'react'
import DocumentRenderer from '../Components/DocumentRenderer'
import { useLocation } from 'react-router-dom'

function Content(props) {
    const location = useLocation()
  return (
    <DocumentRenderer url={location.state.link} />
  )
}

export default Content