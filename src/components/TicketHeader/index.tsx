import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import styles from "./index.module.css";

const TicketHeader = () => {
  return (
    <div className={styles.ticketHeader}>
      <form className={styles.form}>
        <input type="text" placeholder="Tìm bằng số vé" />
        <button type="submit">
          <AiOutlineSearch size={24} />
        </button>
      </form>
      <div className={styles.buttons}>
        <button>
          <FiFilter size={24} />
        </button>
        <button>
          Xuất file (.csv)
        </button>
      </div>
    </div>
  );
};

export default TicketHeader;
