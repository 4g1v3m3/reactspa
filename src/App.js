import "./App.css";
import DessertsList from "./DessertsList";
import Feedback from "./Feedback";
import Input from "./Input";
import Registration from "./Registration";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

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

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};


const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
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
      <Header />
      <Page />
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
