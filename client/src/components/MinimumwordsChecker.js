import React from 'react'

const MinimumWordsChecker = ({ textLength, condition }) => {
    return (
        <span
            style={{
                position: 'absolute',
                width: '20px',
                top: '40%',
                right: '30px',
                transform: 'translateY(-50%)',
                color: !condition ? 'green' : 'red',
            }}
        >
            {textLength + "/" + 100}
        </span>
    )
}

export default MinimumWordsChecker
