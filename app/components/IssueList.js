"use client"

import React from 'react';
import { BiTime, BiUser} from 'react-icons/bi';




const IssueList = ({data,handleDelete}) => {


    return (
        <>
      <section className='w-full sm:w-[80%] mx-auto mt-20 px-5 sm:px-0'>
            <main className='bg-[#eeeeee] w-full  rounded-lg mx-auto p-20'>


                
                  <div >

                    <p>Issue ID: {data.id}  </p>
                   
                    <p> Status :opne/closed</p>
                   
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
                        <button className='px-3 w-full sm:w-[10%] rounded-md py-4 bg-[#F0AD4E] text-white ' >Close</button>
                        <button onClick={()=>{handleDelete(data.id)}} className='px-3 w-full sm:w-[10%] rounded-md py-4 bg-[#D9534F] text-white ' >Delete</button>
                        
                    </div> 
            </div>  
            



            </main>


        </section>  
            
        </>
    );
};

export default IssueList;