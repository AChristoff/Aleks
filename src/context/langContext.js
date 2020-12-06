import {Component, createContext} from 'react';

export const LangContext = createContext();

class LangContextProvider extends Component {
  state = {
    lang: 'en',
  };

  updateLangContext = (key, value) => {
    this.setState({[key]: value})
  };

  render() {
    return (
      <LangContext.Provider value={{...this.state, updateLangContext: this.updateLangContext}}>
        {this.props.children}
      </LangContext.Provider>
    );
  }
}

export default LangContextProvider;