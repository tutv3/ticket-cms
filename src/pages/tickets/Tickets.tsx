import TicketList from "../../components/ticketList";
import tickets from "../../assets/data/tickets";
import TicketHeader from "../../components/TicketHeader";
import TicketFilterPanel from "../../components/TicketFilterPanel";

const Tickets = () => {
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
