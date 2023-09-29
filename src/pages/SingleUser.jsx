import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import axios from "axios";




const SingleUser = () => {
    const [user,setUser] = useState({})
    const [post,setPost] = useState([])
    const [todos,setTodos] = useState([])
    const {id} = useParams()
    const [searchParams,setSearchParams] = useSearchParams()


    const tab = searchParams.get('tab')

    useEffect(() =>{
            axios.get(`https://dummyjson.com/users/${id}`)
                .then(response =>setUser(response.data))
                .catch(err=>console.log(err))

    },[id])

    useEffect(() =>{
        if (tab === "posts"){
            axios.get((`https://dummyjson.com/users/${id}/${tab}`))
                .then((response) =>setPost(response.data.posts))
                .catch(err=>console.log(err))
        }
       else {
           setPost([])
        }
    },[id,tab])

    useEffect(() => {
        if (tab === 'todos') {
            axios.get((`https://dummyjson.com/users/${id}/${tab}`))
                .then(response => setTodos(response.data.todos))
                .catch(err => console.log(err))
        }else{
            setTodos([])
        }
    },[id,tab])


    return (
        <div>
            <div>
                <p>id:{user.id}</p>
                <p>{ user.firstName}{user.lastName}</p>
                <p>age:{user.age}</p>
            </div>
            <div>
                <button onClick={() => setSearchParams({tab:'posts'})}>user Post</button>
                <button onClick={() => setSearchParams({tab:'todos'})}>user todos</button>
            </div>

            {
                tab ==='posts' && post.length > 0 && (
                    <div >
                        {post.map(post => (
                           <div key={post.id}>
                               <h3>{post.title}</h3>
                               <p>{post.body}</p>
                               <div>Tags: {post.tags.join(", ")}</div>
                               <div>Reactions: {post.reactions}</div>
                           </div>
                        ))}
                    </div>
                )
            }
            {
                tab ==='todos' && todos.length >  0 && (
                    <div >
                        {todos.map(todo => (
                            <div key={todo.id}>
                                <h3>{todo.todo}</h3>
                                <p>Completed:{todo.completed ?  "Yes" : "No"}</p>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default SingleUser;