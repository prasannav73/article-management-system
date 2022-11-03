const initialstate = {
  articals: [
    {
      id: 1,
      title: "johndo@example.com",
      author: "Test",
      createdAt: "" + new Date(),
      content: "sdfhdsjh",
      tag: "d",
    },
    {
      id: 2,
      title: "test@123",
      author: "Test1",
      createdAt: "" + new Date(),
      content: "sdfhdsjh",
      tag: "a",
    },
    {
      id: 3,
      title: "h@123",
      author: "Test2",
      createdAt: "" + new Date(),
      content: "sdfhdsjh1",
      tag: "b",
    },
  ],
  users: [
    { id: 1, email: "admin@gmail.com", password: "123456", authMode: "" },
  ],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_ARTICALS":
      return {
        ...state,
      };
    // case "GET_ARTICAL_BY_ID":
    // return {
    //   ...state,
    //    articals: state.articals.filter((item) => item.id === action.articalId)
    // };
    case "ADD_ARTICAL":
      return {
        ...state,
        articals: state.articals.concat(action.payload),
      };
    case "EDIT_ARTICAL":
      return {
        ...state,
        articals: state.articals.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                title: action.payload.title,
                author: action.payload.author,
                createdAt: action.payload.createdAt,
                content: action.payload.content,
                tag: action.payload.tag,
              }
            : content
        ),
      };
    case "DELETE_ARTICAL":
      return {
        ...state,
        articals: state.articals.filter((item) => item.id !== action.payload),
      };
    case "ADD_USER":
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case "UPDATE_USER_LOGIN":
      return {
        ...state,
        users: state.users.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                authMode: action.payload.authMode,
              }
            : content
        ),
      };
    case "GET_USERS":
      return {
        ...state.users,
      };
    default:
      return state;
  }
};

export default reducer;
