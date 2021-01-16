import './Portfolio.scss'
import FlipCard from './partials/FlipCard'
import Meta from '../../../components/shared/Meta'

import { useContext } from 'react'

//  For translations
import { LangContext } from '../../../context/langContext';
import pageDataEN from '../../../data/en/pageData'
import pageDataBG from '../../../data/bg/pageData'
import DataEN from '../../../data/en/cardsData'
import DataBG from '../../../data/bg/cardsData'


function Portfolio() {
  
  //Context
  const { lang } = useContext(LangContext)
  const { cards } = lang === 'en' ? DataEN : DataBG;
  const { portfolio } = lang === 'en' ? pageDataEN : pageDataBG;
  
  return (
    <div className='portfolio'>
      <Meta title='Portfolio' />
      <h3 className='page-title'>{portfolio.title}</h3>

      <section className='card-list'>
        {cards.map((card, index) => (
          <FlipCard key={index} img={card.img} title={card.title} description={card.description} buttons={card.buttons} />
        ))}
      </section>
    </div>
  )
}

export default Portfolio;