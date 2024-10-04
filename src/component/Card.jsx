import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaDatabase } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { SiHomeassistant } from "react-icons/si";
import { FaWarehouse } from "react-icons/fa";


const Card = ({ title }) => {
    const [data, setdata] = useState([])
    const [name, setName] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    const buttonHandler = () => {
        setIsVisible(!isVisible)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (name) {
            setdata([...data, { name: name }])
            setName('')
            setIsVisible(false)
        }

    }



    return (
        <>
            <div className='h-full relative w-1/4 border shadow-xl  border-black rounded-xl '>
                <div>
                    <div className='flex justify-between items-center bg-blue-600 rounded-xl shadow-xl  p-5 border-b-2 border-gray-400'>
                        <h1 className='text-2xl text-white'>{title}</h1>
                        <IoIosAddCircleOutline onClick={buttonHandler} className='text-3xl text-white' />
                    </div>
                </div>

                {isVisible && <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 px-5 z-10 flex items-center justify-center'>
                    <div className='w-full  bg-white rounded-lg flex flex-col items-center justify-center '>
                        <form onSubmit={submitHandler} className='flex flex-col gap-4 py-5 px-5'>
                            <div className=' flex justify-between items-center'> 
                            <h1>Name:</h1>
                            <IoMdClose onClick={()=>setIsVisible(false)} className=' text-2xl'/>
                            </div>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='border border-black p-2 rounded-lg' />
                            <button type='submit' className='bg-black text-white p-2 rounded-lg'>Add</button>
                        </form>
                    </div>
                </div>}

                <div className=' relative h-[89%] w-[100%]  flex flex-col gap-4 items-center justify-start py-4  overflow-y-auto'>

                    {data.map((data, index) => (
                        <Link to='/dummy'>
                            <div key={index} className='flex relative shadow-lg w-[100%] flex-col items-center gap-2 rounded-lg border border-black  py-2 px-5 '>
                                {title === 'on premies' ? (
                                    <FaDatabase className='text-5xl text-blue-600' />
                                ):null}
                                {title === 'Bronze' ? (
                                    <SiHomeassistant className='text-5xl text-blue-600' />
                                ):null}
                                {title === 'Silver' ? (
                                    <FaWarehouse className='text-5xl text-blue-600' />
                                ):null}
                                 {title === 'Gold' ? (
                                    <FaWarehouse className='text-5xl text-blue-600' />
                                ):null}
                                
                                <h1 className='text-2xl text-center text-black'>{data.name}</h1>
                                <h1>{title}</h1>
                            </div>
                        </Link>
                    ))}






                </div>
            </div>
        </>
    )
}

export default Card