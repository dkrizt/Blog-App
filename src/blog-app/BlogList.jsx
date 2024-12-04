import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInitialBlogList,
  deleteSelectedBlogPost,
  setSelectedBlogPostID,
//   editSelectedBlogPost,
  inputChange
} from "../store/slices/blogSlice";

const BlogList = () => {
  const blogList = useSelector((state) => state.blog.blogList);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedBlogList = JSON.parse(localStorage.getItem("blogList")) || [];
    dispatch(setInitialBlogList({ blogList: storedBlogList }));
  }, [dispatch]);

  function handleDelete(getCurrentBlogId) {
    dispatch(deleteSelectedBlogPost({ currentBlogId: getCurrentBlogId }));
  }

  function handleEdit(getCurrentBlog) {
    dispatch(
        // editSelectedBlogPost({currentBlogId: getCurrentBlog})
        setSelectedBlogPostID({
            currentBlogId: getCurrentBlog.id,
          })
    );

    dispatch(
        inputChange({
          title: getCurrentBlog?.title,
          description: getCurrentBlog?.description,
        }))
  }

  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold underline underline-offset-6">
          Posts
        </h3>
      </div>
      <div>
        <div>
          {blogList && blogList.length > 0 ? (
            blogList.map((singlePost) => (
              <div
                key={singlePost?.id}
                className="border border-slate-100 rounded-sm w-96 mt-4 shadow-md p-2"
              >
                <div>
                  <p className="text-sm text-slate-400 italic">
                    ---{singlePost?.id}--
                  </p>
                </div>
                <div>
                  <p className="text-xl text-green-950 underline">
                    -{singlePost?.title}
                  </p>
                </div>
                <div>
                  <p className="text-lg">{singlePost?.description}</p>
                </div>
                <button
                  onClick={()=>handleEdit(singlePost)}
                  className=" bg-cyan-600 text-white px-4 py-2 mt-4 mb-1 mx-3 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(singlePost?.id)}
                  className=" bg-rose-600 text-white px-4 py-2 mt-4 mb-1 mx-3 rounded-md"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <div>
              <p className=" m-7 text-lg text-red-800">
                No Blog Post to display, Add Post!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
