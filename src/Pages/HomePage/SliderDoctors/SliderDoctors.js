import React, { useState } from 'react'
import css from './SliderDoctors.module.scss'
import { createSubArrays } from 'utils'
import Heading from 'components/Heading/Heading'
import Container from 'components/Grid/Container'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import { images } from 'index'
import Button from 'components/Button/Button'
import IconQuotes from 'assets/icons/IconQuotes'
import IconDotsBgDark from 'assets/icons/IconDotsBgDark'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { DOCTORS } from 'Pages/Routes'

const SliderDoctors = ({ title, list }) => {
  const [ activeTab, setActiveTab ] = useState(0)

  const handleClickTab = index => {
    setActiveTab(index)
  }

  const params = {
    slidesPerView: 1,
    speed: 1000,
    effect: 'fade',
    simulateTouch: false,
    fadeEffect: {
      crossFade: true
    },
  }

  const slideContentArea = (item, index) => (
    <div className={css.card} key={index}>
      <figure className={css.cardContent}>
        <div className={css.frame}>
          <IconDotsBgDark className={css.iconDots} />
          <Link to={`${DOCTORS}/${item.id}`}>
            <img
              className={css.photo}
              src={images('./' + item.photo)}
              alt={item.name}
            />
          </Link>
        </div>
        <figcaption className={css.info}>
          <p className={css.name}>
            {item.name}
          </p>
          <p className={css.expertise}>
            {item.expertise}
          </p>
          {item.address && <address className={css.address} dangerouslySetInnerHTML={{__html: item.address}} />}
          {item?.quote && (
            <blockquote className={css.quote}>
              <IconQuotes className={css.iconQuote}/>
              <span dangerouslySetInnerHTML={{__html: item.quote}}/>
            </blockquote>
          )}
          <Button
            className={css.btnAll}
            url={item.url}
            btnStyle='decorated'
            label='Все врачи'
            handleClick={() => {}}
          />
        </figcaption>
      </figure>
    </div>
  )

  const sliderContent = createSubArrays(list, 4).map((slide, index) => {
    const tabs = []
    return (
      <div className={css.slide} key={index}>
        {slide.map((item, index) => {
          const tab = (
            <li className={css.tab} key={index}>
              <button
                className={classnames(css.tabSwitch, {
                  [css.tabSwitchSelected]: activeTab === index
                })}
                type='button'
                onClick={() => handleClickTab(index)}
                aria-label={`Показать информацию о враче ${item.name}`}
              >
                <span className={css.btnName}>
                  {item.name}
                </span>
                <span className={css.btnExpertise}>
                  {item.expertise}
                </span>
              </button>
            </li>
          )
          
          tabs.push(tab)
          
          return (
            <div
              style={{display: activeTab === index ? 'block' : 'none'}}
              className={css.tabContent}
              key={index}
            >
              {slideContentArea(item, index)}
            </div>
          )
        })}
        <ul className={css.tabs}>
          {tabs.map((item) => item)}
        </ul>
      </div>
    )
  })

  return (
    <section className={css.section}>
      <Container>
          <Heading content={title} />
          <div className={css.slider}>
            <Swiper {...params}>
              { sliderContent }
            </Swiper>
          </div>
      </Container>
    </section>
  )
}

SliderDoctors.propTypes = {
  // section heading
  title: PropTypes.string,
  // data from API
  list: PropTypes.arrayOf(
    PropTypes.shape({
      // link to doctor's page
      url: PropTypes.string,
      // doctor's name
      name: PropTypes.string,
      // doctors field of expertise
      expertise: PropTypes.string,
      // doctor's location in case of network of medical centers
      address: PropTypes.string,
      // doctor's photo
      photo: PropTypes.string,
      // doctor's quote
      quote: PropTypes.string
    })
  )
}

export default React.memo(SliderDoctors)
