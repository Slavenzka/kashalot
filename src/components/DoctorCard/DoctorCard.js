import React from 'react'
import css from './DoctorCard.module.scss'
import { images } from 'index'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const DoctorCard = ({
  photo,
  name,
  expertise,
  region,
  location,
  isBranchOffice,
  url
}) => {
  const isSmallerImage = name.includes(`Панова`)
  
  return (
    <Link className={css.link} to={url}>
      <figure className={css.content}>
        <div className={css.frame}>
         <img
           className={classnames(css.photo, {
             [css.photoSmall]: isSmallerImage
           })}
           src={images('./' + photo)}
           alt={`Фотография врача ${name}`}
         />
        </div>
        <figcaption>
          <p className={css.name} dangerouslySetInnerHTML={{ __html: name }} />
          <p className={css.expertise} dangerouslySetInnerHTML={{ __html: expertise }} />
          {location && (
            <p className={css.location}>
              {isBranchOffice ? 'Филиал: ' : ''}
              {`${region} ${location}`}
            </p>
          )}
        </figcaption>
      </figure>
    </Link>
  )
}

export default DoctorCard
