import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.styles.js'
import * as S from './App.styles.js'
import GlobalStyles from './GlobalStyles.js'
import Test1 from './screen/Test1.js'
import Test2 from './screen/Test2.js'
import Test3 from './screen/Test3.js'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <S.NavBar>
        <S.Link to="/">Test1</S.Link>
        <S.Link to="/test2">Test2</S.Link>
        <S.Link to="/test3">Test3</S.Link>
      </S.NavBar>
      <S.MainContainer>
        <Switch>
          <Route exact path="/" component={Test1} />
          <Route path="/test2" component={Test2} />
          <Route path="/test3" component={Test3} />
        </Switch>
      </S.MainContainer>
    </Router>
  )
}

export default App
