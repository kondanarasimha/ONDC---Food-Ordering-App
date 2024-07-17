import { CarouselsMenu } from "./CarouselsMenu";

export const TopPicksCards = (props)=> {
  const carouselsData = props.props.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel;
  const {title} = props.props.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  if(carouselsData === undefined) {
    return <div><h4 className="menu-title">- Menu -</h4></div>
  }
  return(
    <div>
      <h4 className="menu-title">- Menu -</h4>
      <div className="carousel-container">
        <div className="TopPick-title">
          <h3>{title}</h3>
      </div>

        <div className="carousel-img-container">
          {carouselsData.map((carouselData)=> {
            return(<CarouselsMenu key={carouselData.dish.info.id} data={carouselData}/>)})}
        </div>
      </div>
  </div>
  )
}