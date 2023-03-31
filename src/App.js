import "./App.css";
import DessertsList from "./DessertsList";
import Feedback from "./Feedback";
import Input from "./Input";
import Registration from "./Registration";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
    item: 1001,
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
    item: 1010,
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
    item: 1106,
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
    item: 1543,
  },
];

function App() {
  return (
    <div className="App">
      <Registration />
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <Input />
      <Feedback />
    </div>
  );
}

export default App;
