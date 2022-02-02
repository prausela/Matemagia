import React from "react";

const Question = ({a, b}) => {
    return (
        <div className="question bg-light">
            <p>
                {a}×{b}=?
            </p>
        </div>
    );
}

export default Question;