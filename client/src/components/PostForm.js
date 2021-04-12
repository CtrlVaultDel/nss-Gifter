import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../providers/PostProvider";

const PostForm = () => {
    const {register, handleSubmit} = useForm();
    const { addPost } = useContext(PostContext);

    const onSubmit = newPost => {
        addPost(newPost)
    };

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                <h2>Add a new post!</h2>
            </div>
            <div className="form-group row mx-auto">
                <label htmlFor="postTitle" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10 col-auto">
                    <input type="text" className="form-control" id="postTitle" placeholder="Post Title" {...register("Title")}/>
                </div>
            </div>
            <div className="form-group row mx-auto">
                <label htmlFor="postCaption" className="col-sm-2 col-form-label">Caption</label>
                <div className="col-sm-10">
                    <textarea className="form-control" id="postCaption" placeholder="Post Caption" {...register("Caption")}/>
                </div>
            </div>
            <div className="form-group row mx-auto">
                <label htmlFor="postImage" className="col-sm-2 col-form-label">Image URL</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="postImage" placeholder="Post Image URL" {...register("ImageUrl")}/>
                </div>
            </div>
            <div className="form-group row mx-auto">
                <label htmlFor="postUser" className="col-sm-2 col-form-label">Post User</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="postUser" placeholder="Post User" {...register("UserProfileId")}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};

export default PostForm;