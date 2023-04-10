import { useEffect, useState } from "react"
import "./App.css"
import { useTheme } from "./ThemeContext";

const withMousePosition = (WrappedComponent) => {
  return (props) => {

    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    })

    useEffect(() => {

      const handleMousePostionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        })
      }

      window.addEventListener("mousemove", handleMousePostionChange)

      return () => {
        window.removeEventListener("mousemove", handleMousePostionChange)
      }

    }, [])

    return (
      <WrappedComponent {...props} mousePosition={mousePosition} />
    )
  }
}

const PanelMouseLogger = ({mousePosition}) => {
  if (!mousePosition) {
    return null
  } 
  return (
    <div className="BasicTracker">
      <p>Mouse Position:</p>
      <div className="Row">
        <span>X: {mousePosition.x}</span>
        <span>Y: {mousePosition.y}</span>
      </div>
    </div>
  )
}

const PointMouseLogger = ({mousePosition}) => {
  if (!mousePosition) {
    return null
  }
  return (
    <p>
      {mousePosition.x}, {mousePosition.y}
    </p>
  )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)
function CursorPosition() {
  const { theme } = useTheme();
  return (
    <div className="App" style={{
      color: theme === "light" ? "black" : "white",
    }}>
      <header className="Header">Higher-order component. Mouse position.</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  )
}

export default CursorPosition