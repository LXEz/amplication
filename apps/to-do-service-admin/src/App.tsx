import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ToDoTaskList } from "./toDoTask/ToDoTaskList";
import { ToDoTaskCreate } from "./toDoTask/ToDoTaskCreate";
import { ToDoTaskEdit } from "./toDoTask/ToDoTaskEdit";
import { ToDoTaskShow } from "./toDoTask/ToDoTaskShow";
import { ToDoUserList } from "./toDoUser/ToDoUserList";
import { ToDoUserCreate } from "./toDoUser/ToDoUserCreate";
import { ToDoUserEdit } from "./toDoUser/ToDoUserEdit";
import { ToDoUserShow } from "./toDoUser/ToDoUserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      {/* <div>1132</div> */}
      <Admin
        title={"ToDoService"}
        dataProvider={dataProvider}
        // authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ToDoTask"
          list={ToDoTaskList}
          edit={ToDoTaskEdit}
          create={ToDoTaskCreate}
          show={ToDoTaskShow}
        />
        <Resource
          name="ToDoUser"
          list={ToDoUserList}
          edit={ToDoUserEdit}
          create={ToDoUserCreate}
          show={ToDoUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
