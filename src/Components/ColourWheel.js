import React, { useState, useCallback } from 'react'
import { Wheel } from '@uiw/react-color';

function ColourWheel(props) {

    const [width, setWidth] = useState(null);
    const div = useCallback(node => {
      if (node !== null) {
        setWidth(node.getBoundingClientRect().width);
      }
    }, []);

    return (
        <div className='color-wheel' ref={div}>
            <Wheel 
                color={props.hex}
                width={width}
                height={width}
                style={{
                    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.15)',
                    borderRadius: '50%',
                }}
                onChange={(color) => {
                    props.setHex(color.hex)
                }}
            />
        </div>
        
    )
}

export default ColourWheel;