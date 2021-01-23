import "./App.css";
import SpaceFilter from "./components/Filter/filter";
import SpaceItemCard from "./components/SpaceCard/spaceItemCard";
import SpaceList from "./components/SpaceList/spaceList";

function App() {
  return (
    <>
      <div className="main-contaner">
        <div className="spaceList">
          <SpaceList />
        </div>
      </div>
      <div className="footer">
        <p>Developed By : (Ankappa AS)</p>
      </div>
    </>
  );
}

export default App;
