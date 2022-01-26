import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { showFilterPanelAction } from "../../store/actions/globalActions";
import styles from "./index.module.css";

const TicketHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.ticketHeader}>
      <form className={styles.form}>
        <input type="text" placeholder="Tìm bằng số vé" />
        <button type="submit">
          <AiOutlineSearch size={24} />
        </button>
      </form>
      <div className={styles.buttons}>
        <button onClick={() => dispatch(showFilterPanelAction())}>
          <FiFilter size={18} />
          <span>Lọc vé</span>
        </button>
        <button>
          Xuất file (.csv)
        </button>
      </div>
    </div>
  );
};

export default TicketHeader;
