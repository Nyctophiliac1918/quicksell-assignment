import React from 'react';

function Counter({counterValue, saving, maxValue, added, subtracted, changed}) {

    const [addDisabled, setAddDisabled] = React.useState(false);
    const [error, setError] = React.useState("");
    // const handleClearField = () => setAns("");

    React.useEffect(() => {
        if(counterValue >= maxValue)
            setAddDisabled(true);
        else setAddDisabled(false);
    }, [counterValue, maxValue]);

    const handleChange = (e) => {
        // console.log(e.target.value);
        if(Number(e.target.value)>maxValue)
            return;
        changed(e.target.value);
    }

    const handleSubtraction = () => {
        subtracted();
    }

    const handleAddition = () => {
        if(counterValue>=maxValue)
        {   
            setError("Can't set Counter value greater than Max value!")
            return;
        }
        added();
    }

    return (
        <div>
            {saving ? <div className="saving"> <div class="lds-ring preloader-custom"><div></div><div></div><div></div><div></div></div> Saving counter value</div> : <div className="saving" style={{color: "white"}}>.</div>}
            <button className="button-subtract" onClick={handleSubtraction}>-</button>
            <input className="input-custom" type="number" value={counterValue} onChange={handleChange} />
            <button className={addDisabled ? "button-add-disabled" : "button-add"} onClick={handleAddition} >+</button>
        </div>
    );
}

export default Counter;
