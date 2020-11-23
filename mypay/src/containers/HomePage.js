import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContex'
import { types } from '../types/types'

export const HomePage = () => {

    const {user, dispatch} = useContext(AuthContext)
    const history = useHistory()
    const handleLogout = () => {
        dispatch({
            type: types.logout,
        })   
        history.replace('/login')
    }

    return (
        <>
        <span>
                        {user.username}
        </span>
        <button 
            className='btn btn-danger'
            onClick={ handleLogout }
        >
            Logout
        </button>
        <div>
            home page
        </div>
        </>
    )
}
