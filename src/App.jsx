import Home from "./pages/Home";
import Provider from "./providers/Provider";

function App() {
  return (
    <>
      <Provider>
        <Home />
      </Provider>
    </>
  );
}

export default App;
