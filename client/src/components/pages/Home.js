import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1 className='text-yellow'>Recent Question</h1>
                <div>
                <ol>
                        <li><h2>How to identify Base, Emitter, and collector of a Transistor?</h2></li>
                        <li><h2>How to integrate LCD display module with ESP8266?</h2></li>
                        <li><h2>What are the resources to learn about robotics and embedded systems?</h2></li>
                        <li><h2>How to implement certain RISC- CISC architecture?</h2></li>
                        <li><h2>What is ISP connector? what are the pin connections of ISP connector?</h2></li>
                        <li><h2>Which software have you used for PCB layout? What were the other options? Please verify my PCB design</h2></li>
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
}

export default Home
