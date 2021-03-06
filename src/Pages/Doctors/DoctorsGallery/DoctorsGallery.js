import React from 'react'
import css from './DoctorsGallery.module.scss'
import DoctorCard from 'components/DoctorCard/DoctorCard'
import classnames from 'classnames'
import ButtonShowMore from 'components/ButtonShowMore/ButtonShowMore'
import { useSelector } from 'react-redux'
import { ShowAll } from 'store/actions/data'

const DoctorsGallery = ({
  className,
  data,
}) => {
  const filterState = useSelector(state => state.data.doctors.filterState)

  const filteredData = data.filter(item => {
    return Object.keys(filterState).reduce((flag, filterType) => {
      switch (filterType) {
        case 'regions':
          return (filterState[filterType].value === item.region || filterState[filterType].value === ShowAll.value) && flag
        case 'expertise':
          return (filterState[filterType].value === item.expertise || filterState[filterType].value === ShowAll.value) && flag
        case 'names':
          return (filterState[filterType].value === item.name || filterState[filterType].value === ShowAll.value) && flag
        default:
          return true
      }
    }, true)
  })

  const items = filteredData.map((card, index) => (
    <li className={classnames(css.item, className)} key={`Doctor's card #${index}`}>
      <DoctorCard {...card} url={`doctors/${card.id}`} />
    </li>
  ))

  const doctorsList = filteredData.length > 0
    ? (
      <>
        <ul className={css.list}>
          { items }
        </ul>
      </>
    )
    : (
      <p className={css.empty}>
        По вашему запросу врачи не найдены. Попробуйте изменить условия поиска.
      </p>
    )

  return (
    <section className={css.section}>
      { doctorsList }
    </section>
  )
}

export default DoctorsGallery
