import { convertTicketStatusToVnm } from "../../utils/convert";
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
          <strong className={styles.no}>STT</strong>
          <strong>Booking code</strong>
          <strong>Số vé</strong>
          <strong>Tình trạng sử dụng</strong>
          <strong>Ngày sử dụng</strong>
          <strong>Ngày xuất vé</strong>
          <strong>Cổng check - in</strong>
        </li>
        {list.slice(0, 10).map((ticket, index) => (
          <li key={ticket.id} className={styles.ticketItem}>
            <span className={styles.no}>{index + 1}</span>
            <span>{ticket.bookingCode}</span>
            <span>{ticket.id}</span>
            <span>
              <div
                className={[
                  styles.statusWrapper,
                  ticket.status === "expired" ? styles.expired : "",
                  ticket.status === "not-used" ? styles.notUsed : "",
                ].join(" ")}
              >
                <div className={styles.dot}></div>
                <div className={styles.status}>{convertTicketStatusToVnm(ticket.status)}</div>
              </div>
            </span>
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
