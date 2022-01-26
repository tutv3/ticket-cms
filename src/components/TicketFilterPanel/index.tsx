import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./index.module.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { AiOutlineCalendar } from "react-icons/ai";
import { FaTimes } from 'react-icons/fa';
import { useState } from "react";
import { hideFilterPanelAction } from "../../store/actions/globalActions";

const TicketFilterPanel = () => {
  const { ticketFilterPanel } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [showStartDate, setShowStartDate] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [showEndDate, setShowEndDate] = useState(false);

  return (
    <div className={[styles.panel, ticketFilterPanel.isShow ? styles.show : ''].join(" ")}>
      <div className={styles.panelHeader}>
        <h3>Lọc vé</h3>
        <button onClick={() => dispatch(hideFilterPanelAction())}>
          <FaTimes size={18} />
        </button>
      </div>
      <div className={styles.dateRow}>
        <div className={styles.date}>
          <p className={styles.title}>Từ ngày</p>
          <div className={styles.dateOutput}>
            <div>
              {startDate.toDateString()}
            </div>
            <button onClick={() => setShowStartDate(prevState => !prevState)}>
              <AiOutlineCalendar size={24} color="#FF993C" />
            </button>
          </div>
          <div className={styles.calendar}>
            {
              showStartDate && <Calendar
                onChange={(dateStr: Date) => {
                  setStartDate(dateStr);
                  setShowStartDate(false);
                }}
                value={startDate}
                defaultView="month"
              />
            }
          </div>
        </div>
        <div className={styles.date}>
          <p className={styles.title}>Đến ngày</p>
          <div className={styles.dateOutput}>
            <div>
              {endDate.toDateString()}
            </div>
            <button onClick={() => setShowEndDate(prevState => !prevState)}>
              <AiOutlineCalendar size={24} color="#FF993C" />
            </button>
          </div>
          <div className={styles.calendar}>
            {
              showEndDate && <Calendar
                onChange={(dateStr: Date) => {
                  setEndDate(dateStr);
                  setShowEndDate(false);
                }}
                value={startDate}
                defaultView="month"
              />
            }
          </div>
        </div>
      </div>
      <div className={styles.statusRow}>
        <p className={styles.title}>
          Tình trạng sử dụng
        </p>
        <div className={styles.statusRadios}>
          <label className={styles.radioContainer}>Tất cả
            <input type="radio" name="status" />
            <span className={styles.checkmark} />
          </label>
          <label className={styles.radioContainer}>Đã sử dụng
            <input type="radio" name="status" />
            <span className={styles.checkmark} />
          </label>
          <label className={styles.radioContainer}>Chưa sử dụng
            <input type="radio" name="status" />
            <span className={styles.checkmark} />
          </label>
          <label className={styles.radioContainer}>Hết hạn
            <input type="radio" name="status" />
            <span className={styles.checkmark} />
          </label>
        </div>
      </div>
      <div className={styles.portRow}>
        <p className={styles.title}>
          Cổng Check - in
        </p>
        <div className={styles.portOptions}>
          <div>
            <label className={styles.checkboxContainer}>Tất cả
              <input type="checkbox" />
              <span className={styles.checkmarkCheckbox} />
            </label>
          </div>
          <div>
            <label className={styles.checkboxContainer}>Cổng 1
              <input type="checkbox" />
              <span className={styles.checkmarkCheckbox} />
            </label>
          </div>
          <div>
            <label className={styles.checkboxContainer}>Cổng 2
              <input type="checkbox" />
              <span className={styles.checkmarkCheckbox} />
            </label>
          </div>
          <div>
            <label className={styles.checkboxContainer}>Cổng 3
              <input type="checkbox" />
              <span className={styles.checkmarkCheckbox} />
            </label>
          </div>
          <div>
            <label className={styles.checkboxContainer}>Cổng 4
              <input type="checkbox" />
              <span className={styles.checkmarkCheckbox} />
            </label>
          </div>
          <div>
            <label className={styles.checkboxContainer}>Cổng 5
              <input type="checkbox" />
              <span className={styles.checkmarkCheckbox} />
            </label>
          </div>
        </div>
      </div>
      <div className={styles.buttonRow}>
        <button>
          Lọc
        </button>
      </div>
    </div>
  );
};

export default TicketFilterPanel;
