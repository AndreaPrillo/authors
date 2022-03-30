import React, { useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const AuthorList = (props) => {
    
    const { removeFromDom, author, setAuthor } = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/author")
    	.then((res)=>{
	    console.log(res.data);
        setAuthor(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [] );

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>

            <h1>All Authors:</h1>
            {   
                author.map((author, index)=>{
                    return (
                        <div className="list"key={index}>  
                            <p>{author.name} </p>
                            <button>
                                {
                                    <Link className="link" to={"/author/edit/" + author._id}>Edit</Link>
                                }
                            </button>
                            <button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
                        </div> 
                        )
                })
            }
        </div>
    )
}
export default AuthorList;
