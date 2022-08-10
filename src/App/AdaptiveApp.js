import React from 'react'
import classnames from 'classnames'
import css from './AppMobile.module.scss'
import RoutesMobile, { HOME_PAGE } from 'Pages/RoutesMobile'
import HeaderMobile from 'containers/Header/HeaderMobile'
import FooterMobile from 'containers/Footer/FooterMobile'
import { useLocation } from 'react-router-dom'

const AdaptiveApp = () => {
  const {pathname} = useLocation()
  console.log(pathname)
  const isGlobalPaddingTopRequired = pathname !== HOME_PAGE
  
  return (
    <div
      className={classnames(css.wrapper, 'color-pattern-2', {
        [css.wrapperPadding]: isGlobalPaddingTopRequired
      })}
    >
      <HeaderMobile />
      <main>
        <RoutesMobile />
      </main>
      <FooterMobile className={css.footer} />
    </div>
  )
}

export default AdaptiveApp
