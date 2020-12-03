import './Portfolio.scss'
import FlipCard from './partials/FlipCard'
import Data from '../../../data/cardsData'

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="page-title">Portfolio</h3>

      <section className="card-list">
        {
          Data.cards.map((card, index) => (
            <FlipCard
              key={index}
              img={card.img}
              title={card.title}
              description={card.description}
              buttons={card.buttons}
            />
          ))
        }
      </section>
    </div>
  );
}

export default Portfolio;