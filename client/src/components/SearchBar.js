import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../providers/PostProvider";

const SearchBar = () => {
    const {register, handleSubmit} = useForm();
    const { getPostsBySearch } = useContext(PostContext);


    const onSubmit = search => getPostsBySearch(search.Criterion, search.Sort);

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div className="container">
                <div className="form-group mx-auto">
                    <input type="text" className="form-control" id="criterion" placeholder="Search by Title or Caption" {...register("Criterion")}/>
                </div>
                <div className="form-group">
                    <select {...register("Sort")}>
                        <option value="true">Date Descending</option>
                        <option value="false">Date Ascending</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Search!</button>
        </form>
    )
};

export default SearchBar;