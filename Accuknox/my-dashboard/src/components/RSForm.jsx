import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addRegistryScan, removeRegistryScan } from '../store/Slices/registryScanSlice'

function RSForm() {

  const dispatch = useDispatch()

  const [name, setName] = useState('');
  const [critical, setCritical] = useState(0);
  const [high, setHigh] = useState(0);
  const [medium, setMedium] = useState(0);
  const [low, setLow] = useState(0);
  const [negligible, setNegligible] = useState(0);
  const [noIssue, setNoIssue] = useState(0);

  function handleAdd(){
    if(name==='') return
    dispatch(addRegistryScan({
      name,
      critical,
      high,
      medium,
      low,
      negligible,
      noIssue
    }))
    setName('')
    setCritical(0)
    setHigh(0)
    setMedium(0)
    setLow(0)
    setNegligible(0)
    setNoIssue(0)
  }

  return (
    <div className=' flex justify-center items-center my-40 h-96'>
        <div className='flex flex-col rounded-lg items-start border-2 border-gray-500 w-96 mb-10'>
           
            <div className='mt-5 flex flex-col mx-3'>
              <label htmlFor="name">Enter widget name:</label>
              <input id='name' value={name} onChange={(e) => setName(e.target.value)} className='border-2 rounded border-gray-500 w-80' type="text" placeholder='Enter widget name...'/> 
            </div>
            
            <div className='mt-5 flex gap-5 mx-3 border-solid border-black'>
              <label htmlFor="critical">Enter count of critical:</label>
              <input id='critical' value={critical} onChange={(e) => setCritical(Number(e.target.value))} className='border-2 rounded border-gray-500' type="number" min="0"/>
            </div>

            <div className='mt-5 flex gap-5 mx-3 border-solid border-black'>
              <label htmlFor="high">Enter count of high:</label>
              <input id='high' value={high} onChange={(e) => setHigh(Number(e.target.value))} className='border-2 rounded border-gray-500' type="number" min="0"/>
            </div>

            <div className='mt-5 flex gap-5 mx-3 border-solid border-black'>
              <label htmlFor="medium">Enter count of medium:</label>
              <input id='medium' value={medium} onChange={(e) => setMedium(Number(e.target.value))} className='border-2 rounded border-gray-500' type="number" min="0"/>
            </div>

            <div className='mt-5 flex gap-5 mx-3 border-solid border-black'>
              <label htmlFor="low">Enter count of low:</label>
              <input id='low' value={low} onChange={(e) => setLow(Number(e.target.value))} className='border-2 rounded border-gray-500' type="number" min="0"/>
            </div>

            <div className='mt-5 flex gap-5 mx-3 border-solid border-black'>
              <label htmlFor="negligible">Enter count of negligible:</label>
              <input id='negligible' value={negligible} onChange={(e) => setNegligible(Number(e.target.value))} className='border-2 rounded border-gray-500' type="number" min="0"/>
            </div>

            <div className='mt-5 flex  gap-5 mx-3 border-solid border-black'>
              <label htmlFor="noIssue">Enter count of noIssue:</label>
              <input id='noIssue' value={noIssue} onChange={(e) => setNoIssue(Number(e.target.value))} className='border-2 rounded border-gray-500' type="number" min="0"/>
            </div>

            <button onClick={handleAdd} className='bg-green mt-10 mx-40 my-3 px-4 py-2 rounded text-white bg-green-500 active:bg-emerald-900'>Add</button>
        </div>
    </div>
  )
}

export default RSForm