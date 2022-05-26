const Info = (props) => {
    const { state, setState } = props

    const inputChange = (name, value) => {
        setState({
            ...state,
            values: {
                ...state.values,
                [name]: value
            }
        }) 
      }

    const onChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }

    const addInfo = () => {
        const newInfo = {
            comp: state.values.comp,
            easy: state.values.easy,
            hard: state.values.hard
        }
        setState({
            ...state,
            userSaves: [...state.userSaves, newInfo],
            values: {
                comp: "",
                easy: "",
                hard: ""
            }
        });
      }
    
    const onSubmit = evt => {
        evt.preventDefault();
        addInfo();
    }


    return (
        <div className="info-page">
            <h2>{state.chosenClass}</h2>
            <section className="info-block">
            <div className="div1">
                <h3>Reminders</h3>
                <form>
                    <textarea></textarea>
                    <h3>Comps and Matches</h3>
                    {state.userSaves.map((entry, idx) => (
                        <div key={idx}>
                            <p>Your Main Team: <strong>{entry.comp}</strong></p>
                            <p>Your Best Match: <strong>{entry.easy}</strong></p>
                            <p>Your Hardest Match: <strong>{entry.hard}</strong></p>
                        </div>
                    ))}
                </form>
            </div>
            <div className="div2">
                <form onSubmit={onSubmit}>
                    <label>Add Fav Comp
                        <input
                        type="text"
                        placeholder="composition"
                        name="comp"
                        value={state.values.comp}
                        onChange={onChange}
                        />
                    </label>
                    <label>Add Easy Vs
                        <input
                        type="text"
                        placeholder="match-up"
                        name="easy"
                        value={state.values.easy}
                        onChange={onChange}
                        />
                    </label>
                    <label>Add Difficult Vs
                        <input
                        type="text"
                        placeholder="match-up"
                        name="hard"
                        value={state.values.hard}
                        onChange={onChange}
                        />
                    </label>
                    <div>
                        <button>Save</button>
                    </div>
                </form>
            </div>
            </section>
        </div>
    )
}

export default Info