import React from 'react'
import CNPPDashboard from './CNPPDashboard'
import CSPM from './CSPM'
import CWPP from './CWPP'
import RegistryScan from './RegistryScan'

function Body(props) {
  return (
    <div>
        <CNPPDashboard handleComponent={props.handleComponent}/>
        <div className=' bg-gray-50 px-12 min-h-screen'>
            <CSPM handleComponent={props.handleComponent}/>
            <CWPP handleComponent={props.handleComponent}/>
            <RegistryScan handleComponent={props.handleComponent}/>
        </div>
    </div>
  )
}

export default Body