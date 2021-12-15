import React from 'react';

function Header({totalTaskCount}) {
    return (
        <header>
            <h1>Accomplishments</h1>
            <div className="total-task">Completed {totalTaskCount}</div>
        </header>
    );
}

export default Header;