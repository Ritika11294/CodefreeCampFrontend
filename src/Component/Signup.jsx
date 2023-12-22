import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const Signup = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",

    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://freecodecamp-deploy.onrender.com/registration`, values);
            console.log('User registered successfully:', response.data);
            navigate('/login');
        }
        catch (err) {
            console.error('Error registering user:', err);
        }

    }



    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <>
            <FormContainer>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='brand'>
                        <h1>Log in to freeCodeCamp</h1>
                    </div>
                    <input type="text" placeholder='name' name='name' onChange={(e) => handleChange(e)} />
                    <input type="email" placeholder='email' name='email' onChange={(e) => handleChange(e)} />
                    <input type="password" placeholder='password' name='password' onChange={(e) => handleChange(e)} />
                    <button type='submit'>Create User</button>
                    <span>Already have an account ? <Link to="/login">Login</Link></span>
                </form>
            </FormContainer>
        </>
    )
}

const FormContainer = styled.div`
height: 80vh;
width: 32vw;
margin: 8rem auto;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
border: 1px solid black;
.brand{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    h1{
        color: black;
        fontsize: 13px
    }   
}
form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #fff;
    padding: 1rem 2rem;
    input{
        background-color: transparent;
        padding: 1rem;
        border: gray solid;
        color: black;
        font-size: 1rem;
        &:focus {
            outline: none;
        }
    }
    button{
        background-color: #ffba3e;
        color: black;
        padding: 1rem 2rem;
        border: none;
        width: 100%
        cursor: pointer;
        font-size: 1rem;
        transition: 0.5s ease-in-out;
        &:hover {
            background-color: #ffba3e 
        }
    }
    span{
        color: black;
        font-size: 20px;
        text-align: center;
        a {
            color: #4e0eff;
            text-decoration: none
        }
    }
}
`;
export default Signup
