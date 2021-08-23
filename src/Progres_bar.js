import React from 'react';
import './App.css';

const Progress_bar = ({bgcolor, progress, height}) => {
    const Parentdiv = {
        height: height,
        width: '80%',
        borderRadius: 40,
        margin: 50
    }
    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right',
}      
    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
}

        
    return (
        <div className="progress">
    <div style={Parentdiv}>
        <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
    </div>
    </div>
    </div>
    )
}

export default Progress_bar;