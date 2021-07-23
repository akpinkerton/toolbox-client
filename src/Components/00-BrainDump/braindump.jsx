import React, {useContext} from 'react';
//import MessageContext from '../MessagesVar';
import {useIcons} from '../../Context/IconContext'

function ContextTest() {

    const pleaseSaySomethingAgain = useIcons()
    console.log('What the context is: ', pleaseSaySomethingAgain.first)



return(<>

  <div className="test2">{}</div>

</>)

}
export default ContextTest