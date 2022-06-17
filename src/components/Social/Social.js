import React, { memo, useMemo } from 'react'
import css from './Social.module.scss'
import IconFacebook from 'assets/icons/IconFacebook'
import IconVK from 'assets/icons/IconVK'
import IconTwitter from 'assets/icons/IconTwitter'
import IconInstagram from 'assets/icons/IconInstagram'
import classnames from 'classnames'
import { dataSocial } from 'staticData/dataSocial'

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
      case 'facebook':
        return <IconFacebook className={css.icon} />
      case 'vk':
        return <IconVK className={css.icon} />
      case 'twitter':
        return <IconTwitter className={css.icon} />
      case 'instagram':
        return <IconInstagram className={css.icon} />
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