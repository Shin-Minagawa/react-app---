"use strict";

import newPoster from "./newPoster";

import React, { Component } from 'react';
import {render} from "react-dom";


class App extends Component {


render(){
	return (
			<div>
				newPoster start
			</div>
			);


}

};

console.log("newPosterr.js　読み込み成功しました！yattane")

render(<App/>,document.getElementById("react"));


export default App;



