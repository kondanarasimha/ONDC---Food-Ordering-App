import highRatingIcon from '../../Images/star_half_24dp_FILL0_wght400_GRAD0_opsz24.png'
import lowRatingIcon from '../../Images/star_half_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.png'


export function useStartRating(rating,className) {
  return(
    rating >= 4 ? <img className={className} src={highRatingIcon}/> : <img className={className} src={lowRatingIcon}/>
  )
}