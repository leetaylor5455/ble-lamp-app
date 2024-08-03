import React from 'react'

function SaveButton(props) {
    return (
        <div className='button-container'>
            <div className='button'
                onClick={() => props.addColour(props.hex)}
            >Save</div>
        </div>
    )
}

export default SaveButton;