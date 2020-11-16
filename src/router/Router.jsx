import {Switch, Route} from 'react-router-dom';
import Home from '../components/pages/home/Home';
import About from '../components/pages/about/About';
import Portfolio from '../components/pages/portfolio/Portfolio';
import NotFound from '../components/pages/404/NotFound';

export function RouterMain() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/#" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path='*' exact component={NotFound}/>
    </Switch>
  );
};

