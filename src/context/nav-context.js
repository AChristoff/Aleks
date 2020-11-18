import {Component, createContext} from 'react';

export const NavContext = createContext();

class NavContextProvider extends Component {
  state = {
    active: false,
  };

  updateNavContext = (key, value) => {
    this.setState({[key]: value})
  };

  render() {
    return (
      <NavContext.Provider value={{...this.state, updateNavContext: this.updateNavContext}}>
        {this.props.children}
      </NavContext.Provider>
    );
  }
}

export default NavContextProvider;
