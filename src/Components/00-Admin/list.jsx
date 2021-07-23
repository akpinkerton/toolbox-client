import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

  export default function List() {

    return (
      <>
        <div class="col-md-4 border-test">
          - list all tags and have an option add new tag. then map those to display buttons or dropdowns in input form
          - "trash"/"recycle bin" that has all deleted stuff. On delete, POST it to the archive sheet. Have an option to delete permanently from archive.
          - Add a brain gym tab for tools to get smarter - add service workiees
         </div>
      </>
    )
  }
