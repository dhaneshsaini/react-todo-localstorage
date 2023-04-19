import { useState, useEffect, useRef } from "react"

export default function App() {
  const ref = useRef("")
  const [list, setList] = useState([])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("saved_list")) !== null) {
      setList(JSON.parse(localStorage.getItem("saved_list")))
    }
    else {
      setList([])
    }
  }, [])

  function addToList() {
    if (ref.current.value) {
      setList([...list, ref.current.value])
      localStorage.setItem("saved_list", JSON.stringify([...list, ref.current.value]))
      ref.current.value = ""
    }
  }

  return (
    <>
      <div>
        <input ref={ref} type="text" />
        <button onClick={addToList}>Add</button>
      </div>
      <div>
        <ul>{list.map((e, i) => <li key={i}>{e}</li>)}</ul>
      </div>
    </>
  )
}
