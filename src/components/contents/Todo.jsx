import React from 'react'
import threedot from '../../assets/threedot.png'

const Todo = () => {
    return (
        <div>
            <div className='my-5 mx-5 py-1 px-1 flex flex-row justify-between items-center bg-white rounded-lg'>
                <div className='py-1 px-2 rounded-xl bg-orange-100'>
                    Low
                </div>
                
                <div className='items-center'>
                    <img src={threedot} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Todo
