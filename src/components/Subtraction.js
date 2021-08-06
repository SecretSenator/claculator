import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Subtraction = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState(0);

    const handler=(e)=>{
        e.preventDefault();
        const c=parseInt(num1)-parseInt(num2);
        setRes(c);
        console.log(res);
    }

	return (
		<div>
			<Helmet>
                <title>Multiplication</title>
            </Helmet>
			<h1>Subtracting Two Numbers</h1>

			<div className="number-inputs">
				<input type="number" placeholder="0" name='num1' value={num1} onChange={(e)=>{setNum1(e.target.value)}} />
				<input type="number" placeholder="0" name='num2' value={num2} onChange={(e)=>{setNum2(e.target.value)}}/>
			</div>

			<button type='submit' onClick={handler}>Subtract Them!</button>
			<h2>{res}</h2>
		</div>
	);
};

export default Subtraction;
