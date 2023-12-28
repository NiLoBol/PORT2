import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import H1 from "./component/H1";
import ProjectList from "./component/ProjectList";
import { project } from "./constants";
import { styles } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: 
      <div className=" w-screen container mx-auto">
        <H1 id="project" className={styles.sectionHeadText}>
          My Project
        </H1>
        <ProjectList
          next={"back"}
          nexthref={"/"}
          icon={"fa-solid fa-arrow-left"}
          anime={"left"}
          data={project.filter((item) => item.name != "")}
        />
      </div>
    ,
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
