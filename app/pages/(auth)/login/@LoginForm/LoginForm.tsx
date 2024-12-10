"use client";
import React from 'react'
import Button from '../../../../components/Button'

interface LoginForm {

}

const LoginForm = (params: LoginForm) => {
    return (
        <div>
            <div>
                <Button       
                className='bg-white'   
                onClick={()=>console.log("Te amo nati")}
                >             
                Boton
                </Button>
            </div>
        </div>
    )
}

export default LoginForm