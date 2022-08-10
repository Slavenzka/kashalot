import React from 'react'
import css from './DoctorBannerMobile.module.scss'
import classnames from 'classnames'
import { images } from 'index'
import Heading from 'components/Heading/Heading'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import Button from 'components/Button/Button'
import { openContentModal } from 'store/actions/ui'
import ModalAppointmentMobile from 'components/ModalAppointment/ModalAppointmentMobile'
import { useDispatch } from 'react-redux'

const DoctorBannerMobile = ({
  breadcrumbs,
  data,
  reviewsQuantity
}) => {
  const dispatch = useDispatch()
  
  const {
    photo,
    name,
    speciality = '',
    address = '',
    experience = ''
  } = data
  
  const openAppointmentModal = () => {
    dispatch(openContentModal(<ModalAppointmentMobile />))
  }
  
  return (
    <>
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} classContainer={css.breadcrumbs} />
        <div className={css.text}>
          <Heading content={name} className={css.title}  />
          <p className={css.speciality}>
            { speciality }
          </p>
          <ul className={css.list}>
            {address &&
              <li className={classnames(css.item, css.itemAddress)} dangerouslySetInnerHTML={{ __html: address }} />
            }
            {reviewsQuantity > 0 &&
              <li className={classnames(css.item, css.itemReviews)} dangerouslySetInnerHTML={{ __html: `Отзывы: ${reviewsQuantity}` }} />
            }
            {experience &&
              <li className={classnames(css.item, css.itemExperience)} dangerouslySetInnerHTML={{ __html: experience }} />
            }
          </ul>
          <Button
            className={css.btn}
            label='Записаться'
            handleClick={() => openAppointmentModal()}
          />
        </div>
        <div className={css.frame}>
          <img className={css.photo} src={images('./' + photo)} alt={`Фото ${name}`} />
        </div>
      </ContainerMobile>
    </>
  )
}

export default DoctorBannerMobile
