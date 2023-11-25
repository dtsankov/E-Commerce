import React from 'react'
import { getSession } from '../session/session'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { toast } from "react-toastify";




const ProtectedRoute = ( ) => {
    const currentUser = getSession()
    return currentUser ? <Outlet /> : <Navigate to='/login' />
}

const ProtectedAuthRoute = () =>{
    const currentUser = getSession()
    toast.error('You are already logged in')	
    return currentUser ?<Navigate to='/' /> : <Outlet /> 
}

export {
    ProtectedRoute,
    ProtectedAuthRoute
};