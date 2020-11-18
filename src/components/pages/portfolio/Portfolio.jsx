import './Portfolio.scss'
import FlipCard from './partials/FlipCard'

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="page-title">Portfolio</h3>

      <section className="card-list">
        <FlipCard
          img="mern.png"
          title="Fullstack JavaScript"
          description="ReactJS, MongoDB, NodeJS, Express"
          buttons={[
            {
              link: 'https://prodavalnik.aleksov.work/',
              title: 'Project',
              class: 'view-btn',
            },
            {
              link: 'https://github.com/AChristoff/prodavalnik/',
              title: 'Repo',
              class: 'repo-btn',
            },
            {
              link: 'https://prodavalnik-api.aleksov.work/api/docs/',
              title: 'API',
              class: 'api-btn',
            },
          ]}
        />

        <FlipCard
          img="casita-logo.png"
          title="Business Website"
          description="Vue.js & Sass"
          buttons={[
            {
              link: 'https://casita-bg.com/',
              title: 'View project',
              class: 'view-btn',
            },
          ]}
        />

        <FlipCard
          img="nete-logo.png"
          title="NETERRA Landing page"
          description="JavaScript, HTML, CSS"
          buttons={[
            {
              link: 'https://neterra.net/business-services/',
              title: 'View project',
              class: 'view-btn',
            },
          ]}
        />

        <FlipCard
          img="wordpress.png"
          title="WP Custom theme"
          description="Wordpress & Sass"
          buttons={[
            {
              link: 'http://custom-wp-theme.fast-page.org/',
              title: 'View project',
              class: 'view-btn',
            },
          ]}
        />

        <FlipCard
          img="ecta-logo.png"
          title="ECTA 2020 landing page"
          description="JavaScript, HTML, CSS"
          buttons={[
            {
              link: 'https://www.ectacountryfocus.eu/',
              title: 'View project',
              class: 'view-btn',
            },
          ]}
        />

      </section>
    </div>
  );
}

export default Portfolio;