import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { E1List } from "./e1/E1List";
import { E1Create } from "./e1/E1Create";
import { E1Edit } from "./e1/E1Edit";
import { E1Show } from "./e1/E1Show";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"second-app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="E1"
          list={E1List}
          edit={E1Edit}
          create={E1Create}
          show={E1Show}
        />
      </Admin>
    </div>
  );
};

export default App;
