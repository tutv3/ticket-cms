import styles from "./index.module.css";

export interface ITicket {
  id: string;
  bookingCode: string;
  status: string;
  usedDate: string;
  createdDate: string;
  checkInPort: string;
  event: string;
}

export const MAX_ITEMS = 10;

const TicketList = (props: { list: ITicket[] }) => {
  const { list } = props;
  return (
    <div>
      <ul className={styles.ticketList}>
        <li className={[styles.ticketItem, styles.ticketItemHead].join(" ")}>
          <strong>STT</strong>
          <strong>Booking code</strong>
          <strong>Số vé</strong>
          <strong>Tình trạng sử dụng</strong>
          <strong>Ngày sử dụng</strong>
          <strong>Ngày xuất vé</strong>
          <strong>Cổng check - in</strong>
        </li>
        {list.slice(0, 10).map((ticket, index) => (
          <li key={ticket.id} className={styles.ticketItem}>
            <span>{index + 1}</span>
            <span>{ticket.bookingCode}</span>
            <span>{ticket.id}</span>
            <span>{ticket.status}</span>
            <span>{ticket.usedDate || "-"}</span>
            <span>{ticket.createdDate}</span>
            <span>{ticket.checkInPort || "-"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
