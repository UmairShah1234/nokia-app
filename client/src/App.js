import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function isNumber(char) {
  return /^\d+$/.test(char);
}

function App() {

  const [message, setMessage] = useState("");
  const [lang, setLang] = useState("");
  const [diffLang, setDiffLang] = useState("");

  const config = {
    headers: {
      "sender": lang,
      "reciever": diffLang
    }
  }

  const url = "http://localhost:8000/api/earth-mars-comm/message";

  const data = {
    message: message
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNumber(message[1])) {
      setLang("Mars");
      setDiffLang("Earth");
    } else {
      setLang("Earth");
      setDiffLang("Mars");
    }

    await axios.post(url, data, config)
      .then(res => {
        console.log(res?.data);
      })
      .catch(err => console.log(err?.data))

  }

  return (
    <div className="App">
      <div className='mt-20 ml-20 flex justify-center'>
        <div className='mt-5 w-2/4 '>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label htmlFor="input">Enter Your Message</label>
              <input type="text" name="input" value={message} required
                onChange={(e) => setMessage(e.target.value)} className='p-3 border border-black mt-3' />
              <div className='mt-3'>
                <button type="submit" className='bg-slate-900 py-1 px-3 text-white'>Send</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
