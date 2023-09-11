"use client"

import React, { useEffect, useState } from 'react';
import { BiTime, BiUser} from 'react-icons/bi';




const IssueList = ({data,handleDelete}) => {
    // console.log(data)
    const [currentStatus,setCurrentStatus]=useState(true);

    const handlefind=()=>{
        setCurrentStatus(false);

    }



   



    return (
        <>
      <section className='w-full sm:w-[80%] mx-auto mt-20 px-5 sm:px-0'>
            <main className='bg-[#eeeeee] w-full  rounded-lg mx-auto p-20'>


                
                  <div >

                    <p className='mb-5'>Issue ID: {data.id}  </p>
                   
                    <>{currentStatus ? <button className='px-5 py-3 rounded-xl text-white bg-green-600'>Open</button> :<button className='px-5 py-3 rounded-xl text-white bg-red-600' >Closed</button>}</>
                   
                    <p className='my-5 text-xl font-bold'>{data.inputData.desc}</p>

                    <div  className="flex mb-5 gap-3 items-center">
                    <p><BiTime size={30}/></p>
                    <p>{data.inputData.step}</p>  
                  </div>
                    <div  className="flex items-center gap-3 mb-5">
                    <p><BiUser size={30}/></p>

                <p>{data.inputData.assign}</p>  
                        
                </div>
                    <div className='flex gap-6'>
                        <button onClick={()=>handlefind()} className='px-3 w-full sm:w-[10%] rounded-md py-4 bg-[#F0AD4E] text-white ' >Close</button>
                        <button onClick={()=>{handleDelete(data.id)}} className='px-3 w-full sm:w-[10%] rounded-md py-4 bg-[#D9534F] text-white ' >Delete</button>
                        
                    </div> 
            </div>  
            



            </main>


        </section>  
            
        </>
    );
};

export default IssueList;