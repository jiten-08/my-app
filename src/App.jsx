
import './App.css'
import AddTask from './Components/Create/AddTask'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import TaskList from './Components/Display/TaskList'
import UpdateTask from './Components/Update/UpdateTask'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const router = createBrowserRouter([
   {
    element:<Navbar/> ,
    children:[
      { 
        path: "/",
        element: <AddTask/>
      },
      {
        path: "/taskList",
        element: <TaskList/>,
        
    errorElement:<TaskList/>
      },
      {
        path: "/updatetask",
        element: <UpdateTask/>
      }
    ]
  }

    
  ])

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
