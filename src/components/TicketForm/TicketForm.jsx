import React, { useState, useEffect } from 'react'


const TicketForm = ({lines}) => {
    const [stations, setStations] = useState([])
    const [selectedLine, setSelectedLine] = useState('')
    const [selectedStation, setSelectedStation] = useState('')

    const lineList = lines.map(line => ({
       name: line.line
    }))
    console.log(lineList);

    function handleLineSelect(event) {
        console.log('Selected Line', e.target.value);
    }




  return (
    <>
        <div>Ticket Form</div>
        <form>
            <select  className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                Origin: 
                {lines.map(lines => { 
                    return (
                        <option value=''>{lines.line}</option>
                    )
                })}
            </select>
            {selectedLine ? 
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                {lines[selectedLine].map(allStations => {
                    return <option>{allStations}</option>
                })}
                
            </select>
            :
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">

            </select>
}
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                Destination:
                {lines.map(lines => { 
                    return (
                        <option >{lines.line}</option>
                    )
                })}
            </select>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                
            </select>
            <button>Create Ticket</button>
        </form>
    </>
  )
}

export default TicketForm

