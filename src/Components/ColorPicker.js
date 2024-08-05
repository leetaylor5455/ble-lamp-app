import React from 'react';
import { HexColorPicker } from 'react-colorful';

export default function ColorPicker(props) {
    return <div className='color-picker'>
        <HexColorPicker color={props.hex} onChange={props.setHex} />
    </div>
}