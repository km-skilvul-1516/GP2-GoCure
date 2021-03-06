import React, {
    useReducer,
    useEffect,
    useContext,
  } from "react";
  import videoReducer from "./video-reducer";
  
  // Initialized Context
  const VideoContext = React.createContext(null);
  
  let initialLikes;
  try {
    initialLikes =
      JSON.parse(localStorage.getItem("likesVideo")) ?? [];
  } catch {
    console.error("The user could not be parsed into JSON.");
    initialLikes = [];
  }
  
  export function VideoProvider(props) {
      // const [state, dispatch] = useReducer(reducerName, initialState);
      // Reducer return two array, first is state and second is function called dispatch
      const [likesVideo, dispatch] = useReducer(videoReducer, initialLikes);
      useEffect(() => localStorage.setItem("likesVideo", JSON.stringify(likesVideo)), [likesVideo]);
      const contextValue = {likesVideo, dispatch};
      return (
        // Provider for state
        <VideoContext.Provider value={contextValue}>
          {props.children}
        </VideoContext.Provider>
      );
  }
  
  export function useVideo() {
      const context = useContext(VideoContext);
      if (!context) {
        throw new Error(
          "useCart must be used within a UserProvider. Wrap a parent component in <UserProvider> to fix this error."
        );
      }
      return context;
  }
  