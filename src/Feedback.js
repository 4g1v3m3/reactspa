import "./App.css";
import { useState } from "react"

function Feedback() {
  const [score, setScore] = useState("10")
  const [comment, setComment] = useState("")
  const handleSubmit= (e) => {
    e.preventDefault();
    if (Number(score) < 5 && comment.length <=10) {
      alert("Please provide a comment explaining why the experiense was poor.")
      setScore("10")
      return
    }
    setComment("")
    setScore("10")
  }
  
  return (
    <div className="feedback">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <label>Score: {score} ⭐ </label><br></br>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={e => setScore(e.target.value)}
             />
          </div>
          <div className="Field">
            <label>Comment:</label><br></br>
            <textarea id="textarea" value={comment} onChange={e => setComment(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Feedback