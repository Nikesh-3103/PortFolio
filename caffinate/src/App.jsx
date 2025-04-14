import React from 'react';
import CoffeeForm from "./components/CoffeeForm"
import Layout from "./components/layout"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import History from "./components/History"

function App() {
  const isAuthenticated = false

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )
  return (
    <Layout>
      <Hero />
      <CoffeeForm />
      {isAuthenticated && authenticatedContent}
    </Layout>
  )
}

export default App
