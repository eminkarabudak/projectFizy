import React, { useState } from 'react'
import  './css/stylesAcordion.css'
import styles from "./css/stylesSupportDesktop.module.css";
const Acordion = () => {
  const paragraph = 'Turkcell.com.tr en altta bulunan "İşlem Merkezi" sayfasına, Turkcell şifrenizle giriş yaparak ulaşabilir, açılan sayfanın sol kısmında yer alan "Ayarlarım" seçeneği altında yer alan "Çağrı Ayarlarım" sayfasından numara gizleme/gösterme işlemini yapabilirsiniz. Gizleme/gösterme işlemini hemen yapmak için tıklayın.'

  const data = [
    {
      title: 'Kendi numaramı nasıl gizleyebilirim?',
      paragraph
    },
    {
      title: 'Kendi numaramı nasıl gizleyebilirim?',
      paragraph
    },
    {
      title: 'Gizli numaradan arama geliyor, arayanın kim olduğunu nasıl görebilirim?',
      paragraph
    },
    {
      title: 'Kendi numaramı nasıl gizleyebilirim?',
      paragraph
    }
  ]
  const AccordionItem = ({ paragraph, title }) => {
    const [opened, setopened] = useState(false)
    return (
      <div >
        <div
          {...{
            className: `accordion-item, ${opened && 'accordion-item--opened'}`,
            onClick: () => { setopened(!opened) }
          }}
        >
          <div {...{ className: 'accordion-item__line' }}>
            <h3 {...{ className: 'accordion-item__title' }}>
              {title}
            </h3>
            <span {...{ className: 'accordion-item__icon' }} />
          </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
        <div className={styles.KategoriBal}>Kategori Başlığı</div>
        <div {...{ className: 'wrapper' }}>
          <ul {...{ className: 'accordion-list' }}>
            {data.map((data, key) => {
              return (
                <li {...{ className: 'accordion-list__item', key }}>
                  <AccordionItem {...data} />
                </li>
              )
            })}
          </ul>
          <div className={styles.Line}></div>
        </div>
    </div>
  )
}

export default Acordion
