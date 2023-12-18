import Info from "./component/Info";
import Success from "./component/Success";
import Warning from "./component/Warning";
import Error from "./component/Error";

function App() {
  return (
    <div className="main-container">
      <div className="content">
        <h1>Feedback message</h1>
        <div>
          <Success />
          <Info />
        </div>
        <div>
          <Warning />
          <Error />
        </div>
      </div>
    </div>
  );
}

export default App;
