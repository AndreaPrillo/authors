import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
            name,
        })
            .then(res=>{
                console.log(res) 
                console.log(res.data)
                navigate("/");
            })
            .catch((err)=>{
                if(err.response.data.errors === undefined){
                    setErrors({name: {message: "Name is alredy used"}})
                }
                else{
                    console.log(err.response.data.errors.name.message);
                    setErrors(err.response.data.errors);
                }
                
            })     
    }
    
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/author"}>Go to Home</Link>
            <p>Add a new author</p>
            <form onSubmit={onSubmitHandler}>
                <div className="form-input">
                    <label>Name </label>
                    <input type="text" name="name" value={name} onChange = {(e)=>setName(e.target.value)}/>
                    { errors.name ? 
                        <p>{errors.name.message}</p>
                        : null
                    }
                </div>
                <div className="form-btn">
                    <button className="btn">{
                                                <Link className="link" to={"/author"}>Cancel</Link>
                                            }  
                    </button>
                    <button type="submit" className="btn">Create</button>
                </div>
                
            </form>
        </div>
        

    )
}
export default AuthorForm;
