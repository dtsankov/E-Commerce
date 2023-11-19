import React from 'react'
import { getSession } from '../session/session'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'



const ProtectedRoute = ( ) => {
    const currentUser = getSession()
    return currentUser ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute;