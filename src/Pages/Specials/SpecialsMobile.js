import React from 'react'
import css from './SpecialsMobile.module.scss'
import { HOME_PAGE, SPECIALS } from 'Pages/Routes'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import SpecialsListMobile from 'Pages/Specials/SpecialsList/SpecialsListMobile'
import { HOME_PAGE_DATA } from 'Pages/HomePage/_assets/data'

const SpecialsMobile = () => {
  const specialsData = {
    banner: {
      bgImageMobile: 'special__banner@mobile.jpg',
      bgImageTablet: 'special__banner@mobile.jpg',
      title: 'Акции',
    },
    ads: HOME_PAGE_DATA.services.ads.map(({id, ...item}) => ({
      ...item,
      url: `${SPECIALS}/${id}`
    }))
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Акции'
    }
  ]

  return (
    <>
      <BannerMobile {...specialsData.banner} />
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <SpecialsListMobile list={specialsData.ads} />
      </ContainerMobile>
    </>
  )
}

export default SpecialsMobile
