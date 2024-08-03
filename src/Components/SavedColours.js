import React from 'react'
import { useLongPress } from 'use-long-press';

function SavedColours(props) {

    const bind = useLongPress((colour) => {
        console.log(colour.target.id)
        props.removeColour(colour.target.id)
    })

    return (
        <div className='saved-colours'>
            <div className='saved-heading'>Saved</div>
            <div className='swatches'>
                {props.savedColours.map((colour) => (
                    <div className='colour-swatch'
                        style={{backgroundColor: colour}}
                        key={colour} // colours are unique so good for key
                        {...bind(colour)}
                        id={colour}
                    ></div>
                ))}
            </div>
            
        </div>
    )
}

export default SavedColours;