import './FlipCard.scss'

function FlipCard({img, title, description, buttons = []}) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        
        <div className="flip-card-front">
          <img id="cover" src={`/assets/img/cards/${img}`} alt={img} />
        </div>
        
        <div className="flip-card-back">
          
          <h4 className="title">{title}</h4>
          
          <p className="description">{description}</p>

          <section className="buttons">
          {buttons.map((button, index) => (
            <a key={index} type="button" className={`card-btn ${button.class}`} href={button.link} target="_blank" rel="noopener noreferrer" >
              {button.title}
            </a>
          ))}
          </section>

        </div>

      </div>
    </div>
  );
}

export default FlipCard;