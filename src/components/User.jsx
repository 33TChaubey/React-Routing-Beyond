import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const User = () => {
  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-5xl mb-2">User</h1>
      <div className="flex w-1/2 flex-col mt-3">
        <Link className="p-3 bg-red-400 text-2xl text-white mb-3 hover:bg-red-300" to="/user/john" >John</Link>
        <Link className="p-3 bg-red-400 text-2xl text-white mb-3 hover:bg-red-300" to="/user/sumit" >Sumit</Link>
        <Link className="p-3 bg-red-400 text-2xl text-white mb-3 hover:bg-red-300" to="/user/amit" >Amit</Link>

      </div>

      <hr />
      <Outlet />
    </div>
  )
}

export default User
