import React from "react";
import { User } from "./components/User";
import { Company } from "./components/Company";
import { CustomMap } from "./components/CustomMap";
import "./App.css";
import userEvent from "@testing-library/user-event";

const customMap = new CustomMap("map");
const user = new User();

customMap.addUserMarker(user);
function App() {
  const user = new User();
  console.log(user);

  const company = new Company();
  console.log(company);

  return <div className="App"></div>;
}

export default App;
