import React from 'react';
import { useState } from 'react';
import {Helmet} from 'react-helmet'

const Addition = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    const handler=(e)=>{
        e.preventDefault();
        const c=parseInt(num1)+parseInt(num2);
        setSum(c);
        console.log(sum);
    }

	return (
		<div>
			<Helmet>
                <title>Addition</title>
            </Helmet>
			<h1>Adding Two Numbers</h1>

			<div className="number-inputs">
				<input type="number" placeholder="0" name='num1' value={num1} onChange={(e)=>{setNum1(e.target.value)}} />
				<input type="number" placeholder="0" name='num2' value={num2} onChange={(e)=>{setNum2(e.target.value)}}/>
			</div>

			<button type='submit' onClick={handler}>Add Them!</button>
			<h2>{sum}</h2>
		</div>
	);
};

export default Addition;
