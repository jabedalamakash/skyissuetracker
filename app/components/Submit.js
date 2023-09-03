"use client"
import React, { useState } from 'react';
import IssueList from './IssueList';
import { v4 as uuidv4 } from 'uuid';



const Submit = () => {


    const[inputData,setinputData]=useState({
        desc:"",
        step:"low",
        assign:""

    });
    
    const[storeData,setstoreData]=useState([]);

    const handleChange=(e) => {
    setinputData({...inputData,[e.target.name]:e.target.value})}


    const handleAdd=(e) => {
        e.preventDefault();
        setstoreData([...storeData,{ id:uuidv4(),inputData}]);

        setinputData({desc:"",
        step:"low",
        assign:""

        })
    }

  const handleDelete=(id) => {
    const newData =storeData.filter((item)=> item.id != id) ;
    setstoreData(newData);

  }


    return (
        <>

            <main className='w-full sm:w-[80%] px-5 sm:px-0 mx-auto text=5xl mb-20'>

                <div className='bg-[#eeeeee] w-full sm:w-[80%] mx-auto rounded-lg p-20'>
                <h1 className='text-left text-4xl font-bold mb-10 '>Add New Issue:</h1>
                <form  className='flex flex-col mx-auto '>
                    <label  className='text-xl mb-2'>Description</label>
                    <input type="text" name="desc" required onChange={handleChange} value={inputData.desc} placeholder='Describe the issue..' className='w-full p-5 rounded-md border-2 '/><br/>
                    <label className='text-xl mb-2'>Severity</label>
                    <select name="step" required onChange={handleChange} defaultValue={inputData.step} className="p-5" >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    </select>
                    
                    <label className='text-xl mb-2'>Assigned To</label>
                    <input  type="text" required onChange={handleChange} name="assign" value={inputData.assign} placeholder='Enter Responsible...'className='w-full p-5  rounded-md border-2 ' /><br/>
                    <button onClick={handleAdd} className='px-3 w-full sm:w-[10%] rounded-md py-4 bg-[#337AB7] text-white'>Add</button>



                </form>

                </div>

                {
                    storeData ? storeData.map((data)=>{
                        return  <IssueList key={data.id} data={data} handleDelete={handleDelete} />
                    }) : null
                 
                    
    
                }




            </main>
            
        </>
    );
};

export default Submit;