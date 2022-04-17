import React from "react";
import { useState } from "react";
import "./Container.css";

let Container = () => {

	const [Res, setRes] = useState("");

	function addChar(event) {
		if (event.target.innerHTML === "." && Res[Res.length - 1] === ".") {
			return;
		}
		setRes(Res + event.target.innerHTML);
	}

	function remove() {
		setRes("");
	}

	function remove_one() {
		if (Res.length === 1) {
			setRes("");
			return;
		}
		setRes(Res.slice(0, Res.length - 1));
	}

	function calculate() {
		setRes(eval(Res));
	}


	return (
		<div className="container">

			<div className="up">
				{Res}
			</div>


			<div className="down">
				<button onClick={remove} id="clear" className="item">Clear</button>
				<button onClick={remove_one} id="del" className="item">DEL</button>
				<button onClick={addChar} className="op item">/</button>
				<button onClick={addChar} className="item">1</button>

				<button onClick={addChar} className="item">2</button>
				<button onClick={addChar} className="item">3</button>
				<button onClick={addChar} className="op item">*</button>
				<button onClick={addChar} className="item">4</button>

				<button onClick={addChar} className="item">5</button>
				<button onClick={addChar} className="item">6</button>
				<button onClick={addChar} className="op item">-</button>
				<button onClick={addChar} className="item">7</button>

				<button onClick={addChar} className="item">8</button>
				<button onClick={addChar} className="item">9</button>
				<button onClick={addChar} className="op item">+</button>
				<button onClick={addChar} className="item">0</button>

				<button onClick={addChar} className="item">.</button>
				<button onClick={calculate} id="eqaul" className="item">=</button>

			</div>

		</div>
	);
}

export default Container;