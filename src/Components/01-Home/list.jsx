import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

  export default function List() {

    return (
      <>
        <div class="col-md-4 border-test">
          THIS IS THE RESEARCH LIST "TODO" STYLE
          POSSIBLY ADD A "ADD TO RESOURCE OR TEMPLATE" BUTTON OR A "FILE AWAY BUTTON"

          <ul>
            <li>
            - Add a cheat sheet tab specifically. use acordian to dispaly based on topic

            </li>
            <li>
            - Add Admin page
            </li>
            <li>
            - On admin page, list all tags and have an option add new tag. then map those to display buttons or dropdowns in input form
            </li>
            <li>
            - On admin have a "trash"/"recycle bin" that has all deleted stuff. On delete, POST it to the archive sheet. Have an option to delete permanently from archive.
            </li>
            <li>
            - Add a brain gym tab for tools to get smarter - add service workiees
            </li>
            <li>
            - input form URL has to be exact to work on maps
            </li>
            <li>
            - template input to format code 
            </li>
            - Take tags off cards once icons are sorted

          </ul>


         </div>
      </>
    )
  }
