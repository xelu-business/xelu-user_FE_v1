import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./packages"; 

function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <GlobalStyle /> 
    </>
  );
}

export default App;
