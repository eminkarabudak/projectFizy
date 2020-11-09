import React from 'react'
import styles from "./css/stylesSupportDesktop.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import fizy from './image/fizy.png';
import filter from './image/filter.jpg';
import SvgDefault from './iconComponents/SvgDefault'
import SvgArrow from './iconComponents/SvgArrowTail'
import Acordion from './Acordion'
import ShowChatBox from "./toolbox/ShowChatBox"
const SupportDesktop = () => {
  return (

    <div className={styles._DSS_Support_Desktop_FAQ}>
      <div className={styles.bg_header}>
        <div>
          <SvgArrow className={styles.ArrowTail} />
          <div className={styles.Yardm_Merkezi}>Yardim Merkezi</div>
          <div className={styles.Bitmap}>
            <img src={fizy} alt="fizy" className={styles.Mask} />
          </div>
        </div>
      </div>
      <div className={styles.Rectangle}>
        <div className={styles.nav}>
            <div className={styles.Bold}>Size nasıl yardımcı olabiliriz?</div>
            <div className={styles.searchBar}>
            <SvgDefault className={styles.default} />
            <div className={styles.FilterButton}>
              <div>
              <img src={filter} alt="filter" className={styles.CombinedShape} />
                <p className={styles.TalebiGnder}>Filtrele</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.accordionTemplate}>
          <div className={styles.accordionTemplateSizing}>
            <Acordion />
            <Acordion />
            <Acordion />
          </div>
        </div>
      </div>
      <ShowChatBox/>
    </div>
  )
}

export default SupportDesktop
