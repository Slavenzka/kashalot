import React, { memo, useMemo } from 'react'
import css from './Social.module.scss'
import classnames from 'classnames'
import { dataSocial } from 'staticData/dataSocial'
import IconTelegram from 'assets/icons/IconTelegram'
import IconWhatsApp from 'assets/icons/IconWhatsApp'

export const SocialVariants = {
  DEFAULT: `DEFAULT`,
  VIDEO_BANNER: `VIDEO_BANNER`
}

function Social ({
  className,
  variant = SocialVariants.DEFAULT
}) {
  const data = dataSocial
  
  function getIcon (type) {
    switch (type) {
      case 'telegram':
        return <IconTelegram className={css.icon} />
      case 'whatsapp':
        return <IconWhatsApp className={css.icon} />
      default:
        return null
    }
  }
  
  const items = useMemo(() => {
    return data.map(({type, url,}, index) => (
      <li className={css.item} key={index}>
        <a className={css.link} href={url}>
          { getIcon(type) }
          {`Мы в ${type}`}
        </a>
      </li>
    ))
  }, [data])
  
  return (
    <ul
      className={classnames(css.list, className, {
        [css.listVideoBanner]: variant === SocialVariants.VIDEO_BANNER
      })}
    >
      {items}
    </ul>
  )
}

export default memo(Social)
