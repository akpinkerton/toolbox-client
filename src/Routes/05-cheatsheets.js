import React from 'react';
import InputResource from '../Components/05-Cheatsheets/input'
import Form from '../Components/05-Cheatsheets/input-form'
import List from '../Components/05-Cheatsheets/list'

import Search from '../Components/05-Cheatsheets/qk-search'


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

