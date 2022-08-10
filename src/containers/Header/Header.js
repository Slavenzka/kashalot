import React from 'react'
import css from './Header.module.scss'
import Container from 'components/Grid/Container'
import { Link, useLocation } from 'react-router-dom'
import { HOME_PAGE } from 'Pages/Routes'
import DesktopMenu from './components/DesktopMenu/DesktopMenu'
import Button from 'components/Button/Button'
import Intro from 'containers/Header/components/Intro/Intro'
import { useDispatch } from 'react-redux'
import { openContentModal } from 'store/actions/ui'
import logo from 'assets/images/logo.png'
import { headerData } from 'containers/Header/_assets/data'
import ModalAppointment from 'components/ModalAppointment/ModalAppointment'
import useVideoBanner from 'hooks/useVideoBanner'
import classnames from 'classnames'

const Header = () => {
  const dispatch = useDispatch()
  const {type} = useVideoBanner()
  const {pathname} = useLocation()
  
  const isHeaderAbsolute = type !== 1 && pathname === HOME_PAGE

  return (
    <header
      className={classnames(css.header, {
        [css.headerAbsolute]: isHeaderAbsolute,
      })}
    >
      {!isHeaderAbsolute && (
        <Intro
          className={css.top}
          data={headerData}
        />
      )}
      <Container>
        <div className={css.desktopWrapper}>
          <Link to={HOME_PAGE} className={css.logo}>
            <img
              className={css.iconLogo}
              src={logo}
              alt="Kashalot logo"
            />
          </Link>
          <DesktopMenu
            data={headerData}
          />
          <div className={css.btnRegister}>
            <Button
              label='Записаться'
              btnStyle='filledDecorated'
              handleClick={() => {
                dispatch(openContentModal(<ModalAppointment />))}
              }
              className={css.button}
            />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default React.memo(Header)
