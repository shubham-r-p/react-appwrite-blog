import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

const PostCard = ({ $id, title, featuredImage }) => {

  

  return (
    
    <Link to={`/post/${$id}`}>
      
          <div className="w-full bg-gray-100 rounded-xl p-4 shadow">
            <div className="w-full flex justify-center items-center mb-4">
              
              <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
              style={{height: "150px"}} className="rounded-xl fixed-size-image"
              />
            
            </div>
              
              <h2
              className="text-xl font-bold"
              >{title}</h2>

          </div>

    </Link>
  )
};

export default PostCard;
