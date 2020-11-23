import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContex';
import { getCookie } from '../hooks/getCookie';
import { useForm } from '../hooks/useForm'
import { types } from '../types/types';

export const Login = ({history}) => {

    const {dispatch} = useContext(AuthContext)
        // if (user && user.logged === true){
        //     history.push('/home')
        // }
    
    
    const csrftoken = getCookie('csrftoken');
    const [{username, password}, handleInputChange] = useForm(
        {
            username: 'user1',
            password: 'ukio0099'
        }
        )
        
    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            "username": username,
            "password": password
        }
        fetch(`http://127.0.0.1:8000/api/token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            
            const refresh = {"Authorization": `Bearer ${data['refresh']}`}
            const access = {"Authorization": `Bearer ${data['access']}`}
            
            if (refresh['Authorization'] !== 'Bearer undefined' && access['Authorization'] !== 'Bearer undefined'){
                
                dispatch({
                    type: types.login,
                    payload: {
                        username,
                        refresh,
                        access
                    }
                })

                history.replace('/home')
            } else {
                console.log('el username o password no corresponde')
            }

        });
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        history.push('/signin')

    }

    return (
        <div className='container mt-5'>
            
            <h1>Login</h1>
            <hr />
            <form>
                <div className="form-group">
                    <label>Usuario</label>
                    <input type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleLogin}
                >
                    Ingresar
                </button>
                
                <button
                    type="submit"
                    className="btn
                    btn-primary ml-5"
                    onClick={handleSignIn}
                >
                    Registrarse
                </button>
                </form>
        </div>
    )
}
