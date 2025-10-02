import React, {useState} from "react";

function CapitalText ({text}) {
    return <h3>{text.toUpperCase()}</h3>
}

function Parent () {
    const [text1, setText] = useState("");

    const handlySubmit = (e) => {
        e.preventDefault();
    }
    

    return (
        <div>
            <form onSubmit={handlySubmit}>
                <input type="text" value={text1} onChange={(e) => setText(e.target.value)} placeholder="Enter Any text" required />
                <button type="submit">Submit</button>
            </form>

            <CapitalText text={text1} />
        </div>
    )
}
export default Parent;