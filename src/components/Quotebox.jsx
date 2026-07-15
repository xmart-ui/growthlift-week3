import {useState, useEffect} from "react";

function Quotebox(){
  const [quote, setQuote] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
    .then(res => res.json())
    .then(data => {setQuote(data.quote);
      setLoading(false);
    })
  }, [])

  return (
    <div class="quote-box">
    {loading ? <p>Loading...</p> : <p>"{quote}"</p>}
  </div>
  )
  
}

export default Quotebox;