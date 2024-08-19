import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { addCwpp, removeCwpp } from '../store/Slices/cwppSlice';

function CWPP(props) {

        const data = useSelector(state => state.cwpp)
        const dispatch = useDispatch()

  return (
    <div>
        <div className='font-bold'>CWPP Dashboard</div>

        <div className='flex flex-wrap justify-start my-3'>

            {data.widgets.map((widget) => (
                <div key={widget.name} className='flex flex-col border-15 border-blue-50 rounded-xl w-96 h-52 p-3'>
                    
                    <div className='flex flex justify-between'>
                        <div className='font-bold'>{widget.name}</div>
                        <button onClick={()=>dispatch(removeCwpp(widget.name))} className='bg-red-50 font-bold text-white w-5'>X</button>
                    </div>

                    <div className='self-center mt-14	'>
                        <BsGraphUpArrow className='mx-auto'/>
                        <div>No Graph data available!</div>
                    </div>
                </div>
            ))}

                <div className='flex justify-center items-center border-15 border-blue-50 rounded-xl w-96 h-52 p-3'>
                    <button onClick={()=>props.handleComponent('add','cwpp')} className='border-2 border-gray-500 rounded bg-white px-2'>+  Add Widget</button>
                </div>

        </div>

    </div>
  )
}

export default CWPP