import React from 'react';
import InputResource from '../Components/01-Home/input'
import Form from '../Components/01-Home/input-form'
import List from '../Components/01-Home/list'

import Search from '../Components/01-Home/qk-search'


export default function Home() {
  return (<>


  <div class="container-fluid">
  <InputResource/>

      <div class="row">

  <Form/>
  <List/>

      </div>



      <div class="row">

  <Search/>

      </div>

  </div>

  </>);
}

