import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../providers/PostProvider";

const SearchBar = () => {
    const {register, handleSubmit} = useForm();
    const { getPostsBySearch } = useContext(PostContext);


    const onSubmit = search => getPostsBySearch(search.Criterion, search.Sort);

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                <h2>Search by title or caption</h2>
            </div>
            <div className="form-group row mx-auto">
                <label htmlFor="criterion" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10 col-auto">
                    <input type="text" className="form-control" id="criterion" placeholder="Search for Title or Caption" {...register("Criterion")}/>
                </div>
            </div>
            <div className="form-group row mx-auto">
                <label htmlFor="sorting" className="col-sm-2 col-form-label">Sort by descending date?</label>
                <select {...register("Sort")}>
                    <option value="true">Date Descending</option>
                    <option value="false">Date Ascending</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Search!</button>
        </form>
    )
};

export default SearchBar;