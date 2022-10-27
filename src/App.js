import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FullName from "./Component/Profile/FullName";
import "bootstrap/dist/css/bootstrap.min.css";
import MyPhoto from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "0 auto", marginTop: "50px" }}>
        <MyPhoto />
        <Card.Body>
          <Card.Title>
            <FullName />
          </Card.Title>
          <Card.Text>
            <Address />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
