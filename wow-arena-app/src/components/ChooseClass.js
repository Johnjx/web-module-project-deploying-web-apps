const ChooseClass = (props) => {
    const { state, setState } = props

    const handleClassChoice = (cl) => {
        setState({
            ...state,
            classPage: false,
            compositionPage: true,
            chosenClass: cl
        })
    }

    return (
        <div className="class-page">
            <h2>Choose Your Class</h2>
            <section className="class-list">
            {state.classes.map((cl, idx) => (
                <div key={idx} className={`classBox class${idx}`} onClick={() => handleClassChoice(cl)}>
                    <h3>{cl}</h3>
                </div>
            ))}
            </section>
        </div>
    )  
}

export default ChooseClass