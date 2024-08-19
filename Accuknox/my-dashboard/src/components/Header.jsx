import React, {useState,useEffect} from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';

function Header() {

  const cspm = useSelector(state => state.cspm)
  const cwpp = useSelector(state => state.cwpp)
  const rs = useSelector(state => state.registryScan)

  const [search,setSearch] = useState('')
  const [data,setData] = useState([])

  useEffect(()=>{

    if(search===''){
      setData([])
      return
    }

    let s = search.toLowerCase()
    
    let a = cspm.widgets.map((e)=> e.name).filter((e)=> e.toLowerCase().startsWith(s))
    let b = cwpp.widgets.map((e)=>e.name).filter((e)=>e.toLowerCase().startsWith(s))
    let c = rs.widgets.map((e)=>e.name).filter((e)=>e.toLowerCase().startsWith(s))

    setData([...a,...b,...c])

  },[search])

  console.log(data)


  return (
    <>
        <div className='flex justify-between items-center px-5 py-2'>
          <div><span className='text-gray-400'>Home {'>'}</span> <span className='text-blue-700 font-bold'>Dashboard v2</span></div>
          <form className='flex border-solid border-2 rounded justify-start items-center py-1 px-2 w-96 bg-gray-50 text-black '>
              <IoSearchOutline />
              <input onChange={(e)=>setSearch(e.target.value)} className='w-80 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-slate-400' placeholder='Search anything...' />
          </form>
          <div>
              <FaRegCircleUser className='text-2xl'/>
          </div>
        </div>

        {data.length!==0? 
                <div className='flex flex-col border rounded mb-3 justify-center ml-96 mr-80 p-3 '>

                {data.map((e) => (
                  <div className='bg-indigo-50 font-medium'>{e}</div>
                ))}
      
              </div>
              :null}

    </>

  )
}

export default Header