import React from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import { Doughnut } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { addCspm, removeCspm } from '../store/Slices/cspmSlice';

function CSPM(props) {
   
  const data = useSelector(state => state.cspm)
  const dispatch = useDispatch()

  function getSum(total, num) {
    return total + num;
  }

  return (
    <div>
        <div className='font-bold'>CSPM Executive Dashboard</div>
        <div className='flex flex-wrap justify-start my-3'>

        {data.widgets.map((widget) => (

            <div key={widget.name} className='relative flex flex-col flex-start border-15 border-blue-50 rounded-xl w-96 h-52 p-3'>
                          
              <div className='flex flex justify-between'>
                <div className='font-bold'>{widget.name}</div>
                <button onClick={()=>dispatch(removeCspm(widget.name))} className='bg-red-50 font-bold text-white w-5'>X</button>
              </div>
              
              <div className='absolute top-24 left-20 text-xs w-14 flex flex-col justify-center items-center'>
                <div className='font-bold'>{widget.data.map((data) => data.count).reduce(getSum,0)}</div>
                <div>Total</div>
              </div>
                <Doughnut data={{
                    labels: widget.data.map((data) => (data.label+' '+'('+data.count+')')),
                    datasets: [{
                        data: widget.data.map((data) => data.count),
                        backgroundColor: widget.data.map((data) => data.color)
                    }],
                }} options={{
                
                        
                        // responsive: true,
                        maintainAspectRatio: false,
                        layout:{
                          padding:20,
                        },
                        plugins: {

                          legend: {
                            position: 'right',
                            display: true,
                            labels:{
                              font: 10,
                              boxWidth: 10,
                              boxHeight: 10
                            }
                          },

                        }
                      
                }} />
            </div>
        ))}

                <div className='flex justify-center items-center border-15 border-blue-50 rounded-xl w-96 h-52 p-3'>
                    <button onClick={()=>props.handleComponent('add','cspm')} className='border-2 border-gray-500 rounded bg-white px-2'>+  Add Widget</button>
                </div>
        </div>

    </div>
  )
}

export default CSPM