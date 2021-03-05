import React, {} from 'react';

function ReconciliationUsingReact () {

    return (
        React.createElement('div', null, 'Hello React ',
        React.createElement('input', null),
        React.createElement('pre', null, (new Date().toLocaleTimeString())),
        )
    );
}

export default ReconciliationUsingReact