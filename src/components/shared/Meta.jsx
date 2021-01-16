import { Helmet } from 'react-helmet'

const Meta = ({title = '', description = 'Find the best prices', keywords = ''}) => {
  return (
    <Helmet>
      <title>Aleksov | {title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

export default Meta