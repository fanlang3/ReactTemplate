import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import * as Pages from '../page'

export default function Root() {
  const parseCompoent = () => {
    return Object.keys(Pages).map(item => {
      const Root = Pages[item]
      return <Route path={`/${item}`} element={<Root />} key={item} />
    })
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Pages.Home />} />
        {parseCompoent()}
      </Routes>
    </Router>
  )
}
