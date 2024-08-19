import React, {useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCwpp, removeCwpp } from '../store/Slices/cwppSlice'

function CWPPForm() {

    const dispatch = useDispatch()
    const inputRef = useRef(null) 

    function handleAdd(){
      if(inputRef.current.value==='') return
      dispatch(addCwpp(inputRef.current.value))
      inputRef.current.value = ''
    }
  return (
    <div className=' flex justify-center items-center mt-10 h-96'>
        <div className='flex flex-col rounded-lg items-center border-2 border-gray-500 h-96 w-96 mb-10'>
            <input ref={inputRef} className='border-2 rounded border-gray-500 w-80 mt-12' type="text" placeholder='Enter widget name...'/>
            <button onClick={handleAdd} className='bg-green mt-20 px-4 py-2 rounded text-white bg-green-500 active:bg-emerald-900'>Add</button>
        </div>
    </div>

  )
}

export default CWPPForm