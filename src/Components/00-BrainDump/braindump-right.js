import {useState, useEffect, useContext} from 'react';

export default function CheckBox() {
        const [cities, setCities] = useState([])

        useEffect(() => {
          console.log(cities)
        })

        const handleCheck = (e) => {
          if (e.target.checked) {
            setCities([...cities, e.target.value])
          } else {
            removeCities()
          }
        }

        const removeCities = () => {
          setCities(() => cities.splice(cities.length - 1, 1))
        }

        return (
          <>
            <form>
              <input type="checkbox"
                id="1"
                label="Dublin"
                value="dublin"
                name="dublin"
                onChange={handleCheck}
              />
              <input type="checkbox"
                id="2"
                label="New York"
                value="New York"
                name="new-york"
                onChange={handleCheck}
              />
              <input type="checkbox"
                id="3"
                label="Torino"
                value="Torino"
                name="torino"
                onChange={handleCheck}
              />
            </form>
          </>
        )
      

}
