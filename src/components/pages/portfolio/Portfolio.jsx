import './Portfolio.scss'
import FlipCard from './partials/FlipCard'
import DataEN from '../../../data/en/cardsData'
import DataBG from '../../../data/bg/cardsData'
import { useContext } from 'react'
import { LangContext } from '../../../context/langContext';

function Portfolio() {
  
  //Context
  const { lang } = useContext(LangContext)
  const { cards } = lang === 'en' ? DataEN : DataBG;

  return (
    <div className='portfolio'>
      <h3 className='page-title'>Portfolio</h3>

      <section className='card-list'>
        {cards.map((card, index) => (
          <FlipCard key={index} img={card.img} title={card.title} description={card.description} buttons={card.buttons} />
        ))}
      </section>
    </div>
  )
}

export default Portfolio;