import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import VideoBannerType1 from 'Pages/HomePage/VideoBanner/VideoBannerType1/VideoBannerType1'
import VideoBannerType2 from 'Pages/HomePage/VideoBanner/VideoBannerType2/VideoBannerType2'
import useVideoBanner from 'hooks/useVideoBanner'

const VideoBanner = (props) => {
  const {type} = useVideoBanner()

  return (
    <section>
      {type === 1 && <VideoBannerType1 {...props} />}
      {type === 2 && <VideoBannerType2 {...props} />}
    </section>
  )
}

VideoBanner.propTypes = {
  top: PropTypes.shape({
    slogan: PropTypes.string,
    previewLabel: PropTypes.string,
    modalVideo: PropTypes.string,
    modalVideoPreview: PropTypes.string,
  }),
  bottom: PropTypes.shape({
    sloganAdaptive: PropTypes.string,
    sloganDesktop: PropTypes.string,
    backgroundMobile: PropTypes.string,
    backgroundTablet: PropTypes.string,
    descriptor: PropTypes.string,
    videoBg: PropTypes.string,
  })
}

export default React.memo(VideoBanner)
