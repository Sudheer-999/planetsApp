import './index.css'

const PlanetItem = props => {
  const {details} = props

  const {name, imageUrl, description} = details

  return (
    <div className="planet-item">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
