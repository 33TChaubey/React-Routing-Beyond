import React from 'react'
import { useParams } from 'react-router-dom';


const UserDetail = () => {

  const { name } = useParams();
  const gobackHandler = () => {
    window.history.back();
  }


  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-5xl mb-2">User Detail</h1>
      <h1 className="text-3xl">Url {name}</h1>

      <button onClick={gobackHandler} className="px-3 py-1 bg-blue-500 p-1 text-white rounded-lg mt-2">Go Back</button>
    </div>
  )
}

export default UserDetail;
