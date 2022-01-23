import React from 'react';
import { AiOutlineMail, AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';

import styles from './topMenu.module.css';

const TopMenu = () => {
  return <div className={styles.topMenu}>
    <form className={styles.form}>
      <input type="text" placeholder='Search' />
      <button type="submit">
        <AiOutlineSearch size={24} />
      </button>
    </form>
    <div className={styles.rightMenu}>
      <button className={styles.rightBtn}>
        <AiOutlineMail size={24} />
      </button>
      <button className={styles.rightBtn}>
        <IoMdNotificationsOutline size={24} />
      </button>
      <div className={styles.avatar}>
        <img
          src="https://images.pexels.com/photos/6203797/pexels-photo-6203797.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="avatar" />
      </div>
    </div>
  </div>;
};

export default TopMenu;
