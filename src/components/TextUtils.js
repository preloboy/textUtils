import React, { useState } from 'react'

// TextU component
export default function TextUtils(props, event) {

    // console.log(props)
    // Declare a state variable called `text`, and initialize it to an empty string
    const [text, setText] = useState('');

    // Handle text area input change
    const onchange = (event) => {
        setText(event.target.value)
    }

    // Convert text to upper case
    const toUP = () => {
        let textUP = text.toUpperCase();
        setText(textUP);
        console.log('Converted text to upper case')
    }

    // Capitalize the first letter of each word in the text
    const toEC = () => {
        let textEC = text.split(' ').map((word) => { return word.charAt(0).toUpperCase() + word.slice(1) }).join(' ')
        setText(textEC)
        console.log('Capitalized the first letter of each word')
    }


    // Convert text to lower case
    const toLC = () => {
        let textLC = text.toLowerCase();
        setText(textLC)
        console.log('Converted text to lower case')
    }

    // Copy text

    const CopyText = () => {
        try {
            navigator.clipboard.writeText(text)
            document.getElementById('copied').innerText = 'Copied'
            props.showAlert("Copied to Clipboard", "Succes")
        } catch (e) {
            console.log('Error copying text:', e)
        };
    }

    // Render the TextU component
    return (
        <div className={`w-100 mt-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} data-bs-theme={props.mode}>
            <div className='container-fluid mb-3'>
                <h5>Enter the text</h5>
                <textarea className="form-cotrol w-100 p-3" rows='5' name="" id="textbox" value={text} onChange={onchange} placeholder='Type here...'></textarea>
                <div className="d-flex flex-wrap justify-content-between">
                    <button className='btn btn-primary m-1' onClick={toUP}>Upper Case</button>
                    <button className='btn btn-primary m-1' onClick={toEC}>Capitalize Words</button>
                    <button className='btn btn-primary m-1' onClick={toLC}>Lower Case</button>
                </div>
            </div>
            <div className="container-fluid">
                <h5>Text Summery</h5>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <div className="d-flex flex-column">
                    <div className="border rounded w-100 p-3">
                        <p className='font-weight-normal' id='output'>{text.length > 0 ? text : <b>Processed output will be shown here ... </b>}</p>
                    </div>
                    <div className="my-3">
                        <button className='btn btn-secondary w-25' onClick={CopyText}>Copy</button>
                        <span className='mx-3' id="copied"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}