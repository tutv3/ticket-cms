import TicketList, { ITicket } from "../../components/ticketList";
import TicketHeader from "../../components/TicketHeader";
import TicketFilterPanel from "../../components/TicketFilterPanel";
import { useCallback, useState, useEffect } from "react";
import db from '../../firebase';

const Tickets = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);



  const fetchData = useCallback(() => {
    db.collection('database').get().then(snapshot => {
      snapshot.forEach(doc => {
        const {
          bookingCode,
          status,
          usedDate,
          createdDate,
          checkInPort,
          event } = doc.data();
        setTickets(prevState => [...prevState, {
          id: doc.id, bookingCode,
          status,
          usedDate,
          createdDate,
          checkInPort,
          event
        }]);
      });
    })
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <div className="page-container">
      <h1 className="page-title">Danh sách vé</h1>
      <TicketHeader />
      <TicketList list={tickets} />
      <TicketFilterPanel />
    </div>
  );
};

export default Tickets;
