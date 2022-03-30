import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useNavigate , useParams} from "react-router-dom";
const Update = (props) => {
    const { id } = useParams(); 
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setName(res.data.name);
                console.log(res.data.name) 
                
            })
            
            .catch(err => console.log(err))
    }, []);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {
            name,
        })
            .then(res => {
                console.log(res);
                navigate("/"); 
            })
            .catch((err) =>{
            if(err.response.data.message === undefined){
                setErrors({name: {message: "Name is alredy used"}})
            }
            else{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            }
        })
    }
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/author"}>Home</Link>
            <h1>Edit this Author</h1>
            <form onSubmit={updateAuthor}>
            <div className="form-input">
                <label>Name </label>
                <input type="text" name="name" value={name} onChange = {(e)=> { setName(e.target.value)} }/>
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
export default Update;
