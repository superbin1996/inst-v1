import { CLEAR_STATES, GET_POSTS_BEGIN, GET_POSTS_SUCCESS, GET_OTHER_COMMENTS_SUCCESS, HANDLE_CHANGE, LOGIN_USER_BEGIN, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, SHOW_PROFILE, TOGGLE_POST_MODAL, GET_PROFILE_POSTS_SUCCESS, GET_PROFILE_POSTS_BEGIN, TOGGLE_UPLOAD_MODAL, TOGGLE_OPTION_MODAL, HIDE_OPTION_MODAL } from "./actions"

const reducer = (state, action) => {
  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
    }
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
    }
  }

  if (action.type === GET_POSTS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === GET_POSTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      posts: action.payload.posts,
    }
  }

  if (action.type === SHOW_PROFILE) {
    // console.log(action.payload.profileId);
    return {
      ...state,
      profileId: action.payload.profileId,
    }
  }

  if (action.type === GET_PROFILE_POSTS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === GET_PROFILE_POSTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      profilePosts: action.payload.data,
    }
  }

  if (action.type === TOGGLE_POST_MODAL) {
    return {
      ...state,
      showPostModal: action.payload.showPostModal,
      postId: action.payload.postId,
      post: action.payload.post,
    }

  }

  if (action.type === GET_OTHER_COMMENTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      otherComments: action.payload.data,
    }
  }

  if (action.type === CLEAR_STATES) {
    const initialState = {
      isLoading: false,
      // alert
      showAlert: false,
      alertText: '',
      alertType: '',
      // user
      // user: user ? JSON.parse(user) : null,
      // posts
      // posts: [],
      // profile posts
      profilePosts: [],
      // profile
      profileId: -1,
      // postModal
      postId: -1,
      showPostModal: false,
      post: {},
      otherComments: [],
      // add post
      status: '',
      // upload modal
      showUpLoad: false,
      // Option modal
      showOptionModal: false,
    }
    return {
      ...state,
      ...initialState,
    }
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value
    }
  }

  if(action.type === TOGGLE_UPLOAD_MODAL){
    return {
      ...state,
      showUploadModal: !state.showUploadModal,
    }
  }

  if(action.type === TOGGLE_OPTION_MODAL){
    return {
      ...state,
      showOptionModal: !state.showOptionModal,
      post: action.payload.post,
    }
  }
  if(action.type === HIDE_OPTION_MODAL){
    return {
      ...state,
      showOptionModal: false,
    }
  }

  if(action.type === TOGGLE_EDIT_MODAL){
    return {
      ...state,
      
    }
  }
}
export default reducer