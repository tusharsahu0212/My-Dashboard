import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCspm, removeCspm } from '../store/Slices/cspmSlice'


function CSPMForm() {

  const dispatch = useDispatch()

  const [name,setName] = useState('')
  const [label,setLabel] = useState('')
  const [count,setCount] = useState(0)
  const [color,setColor] = useState('#FFFFFF')

  const [data, setData] = useState([]);

  const handleAdd = () => {

    if(label==='') return

    setData([...data, { label, count, color}]);
    setLabel('')
    setCount(0)
    setColor('#FFFFFF')
  };

  const handleRemove = (index) => {
   

      const newData = [...data]; // Create a copy to avoid mutation
      newData.splice(index, 1); // Remove the item at the specified index
  
      setData(newData);

  };

  const handleSubmit = () => {

    if(name==='') return

    dispatch(addCspm({name,data}))
    setName('')
    setData([])

  }

  return (
    <div className=' flex justify-center items-center mt-10'>
        <div className='flex flex-col rounded-lg items-start border-2 border-gray-500 w-96 pb-10 mb-10'>

        <div className='mt-5 flex flex-col mx-3'>
              <label htmlFor="name">Enter widget name:</label>
              <input id='name' value={name} onChange={(e) => setName(e.target.value)} className='border-2 rounded border-gray-500 w-80' type="text" placeholder='Enter widget name...'/> 
        </div>

        <div className='grid grid-cols-4 gap-8 mx-3 my-3 border-2 border-gray-500 rounded p-3'>
            <div className='font-bold'>label</div>
            <div className='font-bold'>count</div>
            <div className='font-bold'>color</div>
            <div className='font-bold'></div>

            {data.map((item,index) => (
              <>
                <div key={item.label+index}>{item.label}</div>
                <div key={item.count+index}>{item.count}</div>
                <div key={item.color+index} style={{backgroundColor:item.color}} className='w-5 h-5 border border-black'></div>
                <button key={index} onClick={()=>handleRemove(index)} className='bg-red-50 text-white'>X</button>
              </>
            ))}

            <input value={label} onChange={(e) => setLabel(e.target.value)} className='border-2 border-gray-500 w-20' placeholder='label..' type="text" />
            <input min={0} value={count} onChange={(e) => setCount(Number(e.target.value))} className='border-2 border-gray-500 w-14' type="number" />
            <input value={color} onChange={(e) => setColor(e.target.value)} className='border-2 border-gray-500' type="color" />
            <button onClick={handleAdd} className='bg-green text-white active:bg-emerald-900'>Add</button>
        </div>

        <button onClick={handleSubmit} className='bg-green active:bg-emerald-900 text-white px-4 py-2 rounded mt-6 ml-40'>Submit</button>

        </div>
  </div>
  )
}

export default CSPMForm