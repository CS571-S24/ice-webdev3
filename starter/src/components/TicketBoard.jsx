import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import TicketLane from './TicketLane'

const TicketBoard = (props) => {

    const [ticketLanes, setTicketLanes] = useState({
        todo: [],
        inprogress: [],
        done: [],
    })

    useEffect(() => {
        fetch('https://cs571.org/api/s24/ice/tickets', {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(ticketData => {
            console.log(ticketData);
            setTicketLanes({
                todo: [], // TODO Put the tickets in the the todo lane!
                inprogress: [],
                done: []
            });
        })
    }, []);

    return <div>
        <h1>Ticket Board</h1>
        <Container fluid>
            {
                /* TODO: Display the ticket lanes! */
            }
        </Container>
    </div>
}

export default TicketBoard;