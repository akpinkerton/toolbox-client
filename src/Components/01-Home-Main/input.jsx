import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

  export default function Input() {

    return (
      <>
<div class="container-fluid">

	<div class="row">



		<div class="col-md-8 border-test">
      THIS IS THE INPUT FORM, put div's in ind components so that the home page route component is clean
		</div>




		<div class="col-md-4 border-test">
      THIS IS THE RESEARCH LIST "TODO" STYLE
      POSSIBLY ADD A "ADD TO RESOURCE OR TEMPLATE" BUTTON OR A "FILE AWAY BUTTON"
		</div>



	</div>



	<div class="row">
		<div class="col-md-12 border-test">
			THIS CAN BE THE SEARCH OPTIONS THAT CAN BE SEARCHED BY TAG AND DISPLAYED BY COLOR OF THAT TYPE THEY ARE
		</div>
	</div>
</div>
      </>
    )
  }
