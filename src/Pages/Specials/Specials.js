import React from 'react'
import css from './Specials.module.scss'
import Banner from 'components/Banner/Banner'
import Container from 'components/Grid/Container'
import { HOME_PAGE, SPECIALS } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import SpecialsList from 'Pages/Specials/SpecialsList/SpecialsList'
import { HOME_PAGE_DATA } from 'Pages/HomePage/_assets/data'
import withModal from 'hoc/withModal'

const Specials = () => {
  const specialsData = {
    banner: {
      bgImage: 'special__banner@desktop.jpg',
      title: 'Акции',
    },
    ads: HOME_PAGE_DATA.services.ads
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
      <Banner {...specialsData.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <SpecialsList list={specialsData.ads} />
      </Container>
      {/*<SignupBanner />*/}
    </>
  )
}

export default React.memo(withModal(Specials))
