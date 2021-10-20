import React, { useEffect } from 'react';
//import { useHistory } from 'react-router-dom'

//const LoginForm = () =>{

function LoginForm(){
    //const history = useHistory();

    useEffect(() => {
        //Hook para el localStorage
        /* if (localStorage.getItem('user-info')){
            history.push("/add")
        } */
    }, [])

    return (
        <div>
            <h1>Ingreso</h1>
            <div>
                <form>
                    <label>Nombre</label>
                    <input type="text"></input><br/>
                    <label>Password</label>
                    <input type="password"></input><br/>
                    <button>Ingresar</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;