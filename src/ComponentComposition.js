import "./App.css";

const Button = ({children, backgroundColor}) => {
  return <button style={{backgroundColor}}>{children}</button>
};

const Alert = ({children}) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  )
}

const DeleteButton = () => {
  return <Button backgroundColor="red">Dismiss</Button>
}

var alertDisable= false


function ComponentComposition() {
  return (
    <div className="ComponetComposition">
      <header>Component Composition</header>
        <Alert >
          <h4>PopUp Alert</h4>
          <p>just dismiss this alert window</p>
          <DeleteButton />
        </Alert>
    </div>
  )
};

export default ComponentComposition;