import React from 'react';

const Result = ({score, response, playAgain}) => {
    return (
        <div className="card">
            <div className="card-body">
                {score === 5 ? <div className="alert alert-primary">You are <strong>Genius!</strong></div> :
                 score >= 3 ? <div className="alert alert-success"><strong>Congratulations!</strong> Your knowledge bag is pretty big.</div>:
                 <div className="alert alert-warning">You need to study more. <strong>Best of luck!</strong> </div>}
                <div className="card-title">You scored {score} out of 5!</div>
                <div className="card-subtitle text-muted">You answered {response} questions out of 5!</div>
                <div className="d-flex justify-content-center mt-3"><button className="btn btn-lg btn-primary" onClick={playAgain}>Play Again!</button></div>
            </div>
        </div>
    )
}

export default Result;