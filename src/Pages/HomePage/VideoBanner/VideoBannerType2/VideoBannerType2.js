import React, { useRef, useState } from 'react'
import css from 'Pages/HomePage/VideoBanner/VideoBannerType2/VideoBannerType2.module.scss'
import Container from 'components/Grid/Container'
import { images, videos } from 'index'
import Heading from 'components/Heading/Heading'
import Social, { SocialVariants } from 'components/Social/Social'
import Modal from 'components/Modal/Modal'

const VideoBannerType2 = ({top, bottom}) => {
  const videoRef = useRef(null)
  const videoBgRef = useRef(null)
  const [isModalVisible, setModalVisibilityStatus] = useState(false)
  
  const handleOpenModal = () => {
    setModalVisibilityStatus(true)
  }
  
  const handleCloseModal = () => {
    setModalVisibilityStatus(false)
  }
  
  return (
    <>
      <div className={css.wrapper}>
        <div
          className={css.videoWrapper}
          style={{
            backgroundImage: bottom?.backgroundDesktop
              ? images(`./` + bottom.backgroundDesktop)
              : `none`
          }}
        >
          <video
            className={css.videoBg}
            muted
            autoPlay
            loop
            playsInline
            ref={videoBgRef}
          >
            <source src={videos('./' + bottom.videoBg)} />
          </video>
        </div>
        <Container className={css.container}>
          <div className={css.content}>
            <div className={css.bannerText}>
              Кашалот
            </div>
            <button
              onClick={handleOpenModal}
              className={css.button}
              type="button"
            >
              Проиграть видео в модальном окне
            </button>
            <Heading
              content={bottom.sloganDesktop}
              className={css.heading}
            />
            <p
              dangerouslySetInnerHTML={{__html: bottom.descriptor}}
              className={css.description}
            />
          </div>
          <Social
            variant={SocialVariants.VIDEO_BANNER}
          />
        </Container>
      </div>
      <Modal isVisible={isModalVisible} handleCloseModal={handleCloseModal}>
        <video className={css.video} controls autoPlay ref={videoRef}>
          <source src={videos('./' + top.modalVideo)} />
        </video>
      </Modal>
    </>
  )
}

export default VideoBannerType2
