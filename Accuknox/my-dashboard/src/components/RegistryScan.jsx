import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeRegistryScan } from '../store/Slices/registryScanSlice';

function RegistryScan(props) {

    const data = useSelector(state => state.registryScan)
    const dispatch = useDispatch()

    function getSum(total, num) {
        return total + num;
      }

  return (
    <div>
        <div className='font-bold'>Registry Scan</div>
        <div className='flex flex-wrap justify-start my-3'>

            {data.widgets.map((widget) => (

                
                <div className='relative flex flex-col flex-start border-15 border-blue-50 rounded-xl w-96 h-52 p-3'>
              
                <div className='flex flex justify-between'>
                    <div className='font-bold'>{widget.name}</div>
                    <button onClick={()=>dispatch(removeRegistryScan(widget.name))} className='bg-red-50 font-bold text-white w-5'>X</button>
                </div>

                <div className='my-2'>{widget.critical+widget.high+widget.medium+widget.low+widget.negligible+widget.noIssue} Total Vulnerability</div>
                <div className='flex rounded-xl h-3 overflow-hidden'>

                    <div style={{width:(widget.critical*100)/(widget.critical+widget.high+widget.medium+widget.low+widget.negligible+widget.noIssue)+'%',backgroundColor:'#bc0406'}} className=''></div>
                    <div style={{width:(widget.high*100)/(widget.critical+widget.high+widget.medium+widget.low+widget.negligible+widget.noIssue)+'%',backgroundColor:'#ff455d'}} className=''></div>
                    <div style={{width:(widget.medium*100)/(widget.critical+widget.high+widget.medium+widget.low+widget.negligible+widget.noIssue)+'%',backgroundColor:'#ff8f50'}} className=''></div>
                    <div style={{width:(widget.low*100)/(widget.critical+widget.high+widget.medium+widget.low+widget.negligible+widget.noIssue)+'%',backgroundColor:'#febf56'}} className=''></div>
                    <div style={{width:(widget.negligible*100)/(widget.critical+widget.high+widget.medium+widget.low+widget.negligible+widget.noIssue)+'%',backgroundColor:'#e4e2e4'}} className=''></div>
                    <div style={{flex: 1,backgroundColor:'#2ea902'}} className=''></div>
                </div>

                <div className='flex flex-col mt-2 items-center'>

                    <div className='w-72 flex gap-10'>
                        <div className='flex items-center gap-1'>
                            <div style={{backgroundColor:'#bc0406'}} className='w-2 h-2'></div>
                            <div>Critical {'('+widget.critical+')'}</div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div style={{backgroundColor:'#ff455d'}} className='w-2 h-2'></div>
                            <div>High {'('+widget.high+')'}</div>
                        </div>
                    </div>

                    <div className='w-72 flex gap-7'>
                        <div className='flex items-center gap-1'>
                            <div style={{backgroundColor:'#ff8f50'}} className='w-2 h-2'></div>
                            <div>Medium {'('+widget.medium+')'}</div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div style={{backgroundColor:'#febf56'}} className='w-2 h-2'></div>
                            <div>Low {'('+widget.low+')'}</div>
                        </div>
                    </div>

                    <div className='w-72 flex gap-4'>
                        <div className='flex items-center gap-1'>
                            <div style={{backgroundColor:'#e4e2e4'}} className='w-2 h-2'></div>
                            <div>Negligible {'('+widget.negligible+')'}</div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div style={{backgroundColor:'#2ea902'}} className='w-2 h-2'></div>
                            <div>No Issue {'('+widget.noIssue+')'}</div>
                        </div>
                    </div>

                </div>
                </div>

            ))}


            <div className='flex justify-center items-center border-15 border-blue-50 rounded-xl w-96 h-52 p-3'>
                    <button onClick={()=>props.handleComponent('add','rs')} className='border-2 border-gray-500 rounded bg-white px-2'>+  Add Widget</button>
            </div>

        </div>
    </div>
  )
}

export default RegistryScan