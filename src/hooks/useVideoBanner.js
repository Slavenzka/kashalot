import { useSelector } from 'react-redux'

function useVideoBanner () {
  const videoBannerType = useSelector(state => state.videoBanner.videoBannerType)
  
  return {
    type: videoBannerType
  }
}

export default useVideoBanner