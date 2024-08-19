import React from 'react'
import { TfiReload } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

function CNPPDashboard(props) {
  return (
    <div className='flex justify-between bg-gray-50 px-10 py-5'>
      <div className='font-bold'>CNPP Dashboard</div>
      <div className='flex justify-center items-center gap-5'>
        <button onClick={()=>props.handleComponent('add')} className='border-2 border-gray-500 rounded bg-white px-2'>Add Widget +</button>
        <BsThreeDotsVertical className='border-2 border-gray-500 rounded bg-white h-6 w-7'/>
        <TfiReload className='border-2 border-gray-500 rounded bg-white h-6 w-7 p-1'/>

        <button className='flex gap-1 justify-center items-center border-2 border-gray-500 rounded bg-white px-2'>
          <BsClockFill />
          <div>| Last 2 Days</div>
          <RiArrowDropDownLine />
        </button>
      </div>
    </div>
    
  )
}

export default CNPPDashboard