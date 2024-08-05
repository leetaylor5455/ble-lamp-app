import React, { useState } from 'react';


function Header(props) {
    
    const [connected, getConnected] = useState(false);
    
    return (
        <header style={{color: props.bright ? '#343434' : '#fff'}}>
            <div className='title'>Sofia's Lamp</div>
            <div className='connection-status'>
                <div className='connection-text'>
                    { connected ? 'Connected' : 'Disconnected' }
                </div>
                <div className='connection-indicator'></div>
            </div>
        </header>
    )
}

export default Header;