import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
  selectedBlogPostId: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    inputChange: (state, action) => {
      let cpyFormData = { ...state.formData };
      cpyFormData = { ...cpyFormData, ...action.payload };
      state.formData = cpyFormData;
    },

    setInitialBlogList: (state, action) => {
      state.blogList = action.payload.blogList;
      console.log(Array.isArray(state.blogList));
    },

    addNewBlog: (state, action) => {
      console.log({ ...state.formData }, action);
      state.blogList.push({
        id: nanoid(),
        ...state.formData,
      });

      state.formData = {
        title: "",
        description: "",
      };

      localStorage.setItem(
        "blogList",
        JSON.stringify(state.blogList.reverse())
      );
    },

    deleteSelectedBlogPost: (state, action) => {
      const { currentBlogId } = action.payload;
      const cpyBlogList = state.blogList;
      const newBlogList = cpyBlogList.filter(
        (blogPost) => blogPost.id !== currentBlogId
      );
      state.blogList = newBlogList;
      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },

    setSelectedBlogPostID: (state, action) => {
      const { currentBlogId } = action.payload;
      state.selectedBlogPostId = currentBlogId;
    },

    // eslint-disable-next-line no-unused-vars
    editSelectedBlogPost: (state, action) => {

    //   const { currentBlogId } = action.payload;

      let cpyBlogList = [...state.blogList];
      const findIndexOfCurrentBlogItem = cpyBlogList.findIndex(
        (singleBlogItem) => singleBlogItem.id === state.selectedBlogPostId
      );

    //   console.log(findIndexOfCurrentBlogItem);

      cpyBlogList[findIndexOfCurrentBlogItem] = {
        ...cpyBlogList[findIndexOfCurrentBlogItem],
        ...state.formData,
      };

      state.blogList = cpyBlogList;
      localStorage.setItem("blogList", JSON.stringify(cpyBlogList));
    },
  },
});

export const {
  addNewBlog,
  inputChange,
  setInitialBlogList,
  deleteSelectedBlogPost,
  editSelectedBlogPost,
  setSelectedBlogPostID,
} = blogSlice.actions;

export default blogSlice.reducer;
