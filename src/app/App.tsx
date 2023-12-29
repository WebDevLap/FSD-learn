import React from "react"
import { useAppDispatch } from "./store"
import {  getPosts } from "@entities/Posts";
import { Header } from "@widgets/Header";
import {PostList} from '@widgets/Posts'
import { Login } from "@widgets/auth/LogIn";
import { Signup } from "@widgets/auth/SignUp/ui/Signup";


function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    // async thunks
    dispatch(getPosts()) 
  })

  return (
    <>
      <div >
        <Header/>
        <PostList/>
        <Login />
        <Signup/>
      </div>
    </>
  )
}
export default App
