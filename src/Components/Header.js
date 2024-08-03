import React, { useState } from 'react';


function Header() {
    
    const [connected, getConnected] = useState(false);
    
    return (
        <header>
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