import './index.css'

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem details={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
