import { useDispatch, useSelector } from "react-redux";

import {
  addNewBlog,
  inputChange,
  editSelectedBlogPost,
  setSelectedBlogPostID,
} from "../store/slices/blogSlice";

const AddNewBlog = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);
  const { selectedBlogPostId } = blog;

  function handleChange(event) {
    dispatch(
      inputChange({
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleBlogSubmit(event) {
    event.preventDefault();
    if (selectedBlogPostId !== null) dispatch(editSelectedBlogPost());
    else dispatch(addNewBlog());

    if (selectedBlogPostId !== null)
      dispatch(
        setSelectedBlogPostID({
          currentBlogId: null,
        })
      );
    dispatch(
      inputChange({
        description: "",
        title: "",
      })
    );
  }

  return (
    <form onSubmit={handleBlogSubmit}>
      <div className="flex flex-col my-3">
        <div className="my-3">
          <label className=" text-base md:text-lg" htmlFor="title">
            Enter Blog Title:
          </label>
          <input
            id="title"
            onChange={handleChange}
            type="text"
            placeholder="Enter Blog Title"
            name="title"
            value={blog?.formData?.title}
            className="text-base border p-1 md:p-1 ml-2 rounded-sm border-slate-300 w-50 md:w-60"
          />
        </div>
        <div className="my-3">
          <label className=" text-base md:text-lg" htmlFor="description">
            Enter Blog Description:
          </label>
          <input
            id="description"
            onChange={handleChange}
            type="text"
            placeholder="Enter Blog Description"
            name="description"
            value={blog?.formData?.description}
            className="text-base border p-1 md:p-1 ml-2 rounded-sm border-slate-300 w-40 md:w-70"
          />
        </div>
        <div>
          <button
            type="submit"
            className=" bg-sky-600 text-white px-4 py-2 rounded-md"
          >
            {selectedBlogPostId ? "Edit Blog" : "Add New Blog"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddNewBlog;
