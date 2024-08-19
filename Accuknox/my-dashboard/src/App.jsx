import React, {useState, useEffect} from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import AddWidget from "./components/AddWidget.jsx";

function App() {

  const [component,setComponent] = useState('')
  const [widget,setWidget] = useState('cspm')

  const handleComponent = (c,w='cspm') => {

    setWidget(w)
    setComponent(c)
  }

  return (
    <>

    <div className="relative">
      <div>
        <Header />
        <Body handleComponent={handleComponent}/>
      </div>
      <div className={`absolute top-0 right-0 ${component==='add'?'':'hidden'}`}>

      <AddWidget widget={widget} handleComponent={handleComponent}/>
      </div>
    </div>



    </>

  );
}

export default App;
