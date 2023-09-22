import { useState, useRef, useEffect } from 'react'
import Example from './Example'
import './App.css'
import { useCallback } from 'react'

function App() {
  // const [countone, setCountone] = useState(0)
  // const [counttow, setCounttow] = useState(0)
  // const [text, setText] = useState("example")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [spCharAllowed, setSpCharAllowed] = useState(true)
  const [update, setUpdate] = useState(0)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null);
  const passwordGennarator = useCallback(() => {
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrsSTtUuVvWwXxYyZz";
    let pass = "";
    if (numberAllowed) {
      str += "1234567890";
    }
    if (spCharAllowed) {
      str += "~!@#$%^&*(){}[]";
    }
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))

    }
    setPassword(pass);
  }, [length, numberAllowed, spCharAllowed, setPassword])

  //passwordGennarator();
  // const isEven=useMemo(()=>{
  //   console.log("first")
  //   setText((priv)=>{priv+1});
  //   return countone%2===0;

  // },[countone])
  // const isEven=useMemo(()=>{
  //   console.log("first")
  //   return countone%2===0;
  // },[countone])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGennarator()
  }, [length, numberAllowed, spCharAllowed, passwordGennarator])
  const updateval = useCallback(()=> setUpdate((priv)=>priv+1),[])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <Example text="kuntal" up={update} update={updateval}/>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={4}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={spCharAllowed}
            id="characterInput"
            onChange={() => {
              setSpCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
