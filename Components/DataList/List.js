import { React, useEffect, useState } from 'react'

function List(props) {




    const [Place, setPlace] = useState([]);

    const fetchDatas = () => {
      return fetch("https://script.google.com/macros/s/AKfycbwVlBkemc23x3_nwPykmPgeM-YYjMKPa9oDdHJhfgKeyneEnX2cqncshGOeCUnXMq4p/exec")
        .then((response) => response.json())
        .then((placedata) => setPlace(placedata));
    
    }
    
    useEffect(() => {
    fetchDatas();
  
    
    }, []);

    const filteredData = Place.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul >
            {filteredData.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}
export default List;