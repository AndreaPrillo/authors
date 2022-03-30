import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthorList from "../components/AuthorList";
const Main = (props) => {
    const [author, setAuthor] = useState([]);

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId)); 
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/author/new/"}>Add an author</Link>
            <p>We have quotes by:</p>
            <AuthorList author={author} setAuthor={setAuthor} removeFromDom={removeFromDom}/>
        </div>
    );
};
export default Main;
