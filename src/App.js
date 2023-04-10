import "./App.css";
import DessertsList from "./DessertsList";
import Feedback from "./Feedback";
import Input from "./Input";
import Registration from "./Registration";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";
import UseStateHook from "./UseStateHook"
import ManaginStateComponent from "./ManaginStateComponent";
import UsingUseEffecHook from "./UsingUseEffectHook";
import Fetching from "./Fetchingdata";
import CustomHook from "./CustomHook";
import ComponentComposition from "./ComponentComposition";
import RadioGroupComponent from "./RadioGroupComponent";
import CursorPosition from "./CursorPosition";
import PropsRendering from "./PropsRendering";

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

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Theme switcher Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
{/*      <ComponentComposition /> */}
      <PropsRendering />
      <CursorPosition />
      <RadioGroupComponent />
      <UsingUseEffecHook />
      <CustomHook />
      <Fetching />
      <ManaginStateComponent />
      <UseStateHook />
      <Header />
      <Registration />
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <Input />
      <Feedback /> 
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
