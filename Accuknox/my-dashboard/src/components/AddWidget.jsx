import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CSPMForm from './CSPMForm';
import CWPPForm from './CWPPForm';
import RSForm from './RSForm';

function AddWidget(props) {

    const [widget,setWidget] = useState(props.widget)

    function handleWidgetClick(widget){
        
        setWidget(widget)
    }

  return (
    <div style={{width:'900px', height:'850px'}} className='bg-white'>
        <div className='flex justify-between bg-blue-900 text-white py-4 px-6'>
            <div>Add Widget</div>
            <button onClick={()=>props.handleComponent('')}>X</button>
        </div>

        <div className='m-3'>Personalize your dashboard by adding the following widget</div>

        <div className='flex gap-10 mx-8 font-bold'>
            <button onClick={()=>handleWidgetClick('cspm')} className={widget=='cspm'?'text-blue-900':'text-gray-400'}>CSPM</button>
            <button onClick={()=>handleWidgetClick('cwpp')} className={widget=='cwpp'?'text-blue-900':'text-gray-400'}>CWPP</button>
            <button onClick={()=>handleWidgetClick('rs')} className={widget=='rs'?'text-blue-900':'text-gray-400'}>Registry Scan</button>
        </div>
        <div className='flex mx-3'>
            <div style={{ width: '83px' }} className={`border-2 ${widget == 'cspm' ? 'border-blue-900' : 'border-gray-400'}`}></div>
            <div style={{width:'83px'}} className={`border-2 ${widget == 'cwpp' ? 'border-blue-900' : 'border-gray-400'}`}></div>
            <div style={{width:'150px'}} className={`border-2 ${widget == 'rs' ? 'border-blue-900' : 'border-gray-400'}`}></div>
        </div>

        {/* Forms */}

        {
            widget === 'cspm' ? <CSPMForm /> :
            widget === 'cwpp' ? <CWPPForm /> :
            <RSForm />
        }
        
    </div>

    
  )
}

export default AddWidget