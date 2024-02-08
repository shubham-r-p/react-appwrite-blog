import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/config"


const EditPost = () => {

    const { slug } = useParams();
    const navigate = useNavigate()
    const [ post, setPost ] = useState(null)
    
    useEffect(() => {

        if(slug) {
            appwriteService.getPost(slug)
                .then((post) => {
                    if(post) setPost(post)
                })
        }
        else{
            navigate("/")
        }
    }, [slug, navigate])


  return post ? 

    (<div className="py-8">
        <Container>
            <PostForm post={post} />
        </Container>
    </div>)
    
    : null;
}

export default EditPost