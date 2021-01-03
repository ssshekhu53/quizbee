import React, {useState} from 'react';
import {Container} from 'react-bootstrap';

const QuestionBox = ({question, options, selected}) => {
    const [answer, setAnswer]=useState(options);

    return (
        <div className="card">
            <div class="card-body">
                <div className="card-title">{question}</div>
                {answer.map(
                    (text, index) => (
                        <button key={index} className={answer.length !== 1 ? 'btn btn-outline-primary mr-2 mb-2' : 'btn btn-success mr-2 mb-2'} disabled={answer.length !== 1 ? false : true} onClick={() => { setAnswer([text]); selected(text); }}>{text}</button>
                    )
                )}
            </div>
        </div>
    );
};

export default QuestionBox; 