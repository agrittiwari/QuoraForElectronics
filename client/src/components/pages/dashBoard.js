import React from 'react'

const dashBoard = () => {
    return (
        <div>
            <h1 className='text-yellow'>Recent Question</h1>
                <div>
                    <ol>
                        <li><h2>How to identify Base, Emitter, and collector of a Transistor?</h2></li>
                        <li><h2>How to identify input, output, and ground of 7805 / 7812?</h2></li>
                        <li><h2>What are the types of Resistors?</h2></li>
                        <li><h2>What is the difference between 89c51 and 89s51?</h2></li>
                        <li><h2>What is ISP connector? what are the pin connections of ISP connector?</h2></li>
                        <li><h2>Which software have you used for PCB layout? What were the other options?</h2></li>
                    </ol>
                </div>
                <div className='comment'>
                    <label htmlFor='comment'>Comment</label>
                    <input 
                        type='text' 
                        name='comment' 
                        className='comment-input'
                        placeholder='Enter The Comment'
                    ></input>
                    <input type='submit' value="Submit Answers" className="btn btn-yellow btn-block" />
                </div>

        </div>
    )
}

export default dashBoard
