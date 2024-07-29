import { CarouselsMenu } from "./CarouselsMenu";

export const TopPicksCards = (props)=> {
  const carouselsData = props.props.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel;
  const {title} = props.props.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  if(carouselsData === undefined) {
    return <div className="mt-10"><h4 className="text-xl text-gray-600 text-center">- Menu -</h4></div>
  }
  return(
    <div className="mt-10 mb-10">
      <h4 className="text-xl text-gray-600 text-center">- Menu -</h4>
      <div>
        <div className="mt-3 mb-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

        <div className="grid grid-cols-4 gap-4">
          {carouselsData.map((carouselData)=> {
            return(<CarouselsMenu key={carouselData.dish.info.id} data={carouselData}/>)})}
        </div>
      </div>
  </div>
  )
}