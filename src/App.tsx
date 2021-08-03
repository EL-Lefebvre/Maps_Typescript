import { User } from "./components/User";
import { Company } from "./components/Company";
import { CustomMap } from "./components/CustomMap";
import "./App.css";

const customMap = new CustomMap("map");
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);

function App() {
  return <div className="App"> </div>;
}

export default App;
