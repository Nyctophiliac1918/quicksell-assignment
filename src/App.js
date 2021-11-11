import './App.css';
import React from 'react';
import axios from 'axios';
import Counter from './Components/Counter';
import CounterVal from './Components/CounterVal';

function App() {

  const [initialValue, setInitialValue] = React.useState(1);
  const [isFetching, setIsFetching] = React.useState(true);
  const [counter, setCounter] = React.useState(1);
  const [max, setMax] = React.useState(1000);
  const [changing, setChanging] = React.useState(false);

  React.useEffect(() => {
    const fetchCounter = async () => {
        try {
            setCounter(counter);
            setIsFetching(true);
            setInitialValue(initialValue);
            const response = await axios.get("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/karansaraswat.json");
            setInitialValue(response.data || 1);
            setCounter(response.data || 1);
            setIsFetching(false);
        } catch (e) {
            console.log(e);
            setInitialValue(initialValue);
            setCounter(counter);
            setIsFetching(false);
        }
    };

    fetchCounter();
  }, []);

  React.useEffect(() => {
    if(Number(max)<counter)
    {
      setCounter(Number(max));
      changeCounterValue(Number(max));
    }
  }, [counter, max]);

  const changeCounterValue = async (karansaraswat) => {
    try {
      setChanging(true);
      const response = await axios.put("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json", {karansaraswat});
      console.log(response);
      setChanging(false);
    } catch (e) {
      console.log(e);
      setChanging(false);
    }
  }

  const handleAdded = () => {
    setChanging(true);
    setCounter(counter+1);
    changeCounterValue(counter+1);
  }

  const handleSubtracted = () => {
    setChanging(true);
    setCounter(counter-1);
    changeCounterValue(counter-1);
  }

  const handleChanged = (newValue) => {
    setChanging(true);
    setCounter(newValue);
    changeCounterValue(newValue);
  }

  return (
    <div className="App">
      {
        isFetching ? <div className="plzWait"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div> :
        (
          <div>
            <div className="title">
              <h1>Counter App</h1>
            </div>
            <div>
              <label for="initial">Initial value: </label>
              <input name="initial" className="input-custom border-custom" style={{marginRight: "5%"}} type="number" value={initialValue} disabled />
              <label for="max">Max value: </label>
              <input name="max" className="input-custom border-custom" type="number" value={max} onChange={(e) => setMax(e.target.value)} />
            </div>
            <div className="main-box margin-top--48">
              <Counter counterValue = {counter} saving = {changing} maxValue = {max} added = {handleAdded} subtracted = {handleSubtracted} changed = {(val) => handleChanged(Number(val))} />
              <CounterVal data = {counter} />
            </div>
            <div className="intro">
              For knowing about the rules of this app, please refer to README of <a href="https://github.com/Nyctophiliac1918/quicksell-assignment">Github</a> repo.
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
