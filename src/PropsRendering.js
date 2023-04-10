import { useEffect, useState } from "react"
import "./App.css"

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "brownie", "pie"])
    } else {
      setData(["water", "soda", "juice"])
    }
  }, [])
  return render(data)
}

const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  )
}

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <p>{data.length} drinks</p>}
    />
  )
}

function PropsRendering() {
  return (
  <div className="App">
    <h2>Props Rendering</h2>
    <DessertsCount />
    <DrinksCount />
  </div>
  )
}

export default PropsRendering