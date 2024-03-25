import React from 'react'

import Form from './components/Form'
import Documents from './components/Documents'
const App = () => {
  return (
   <div className='mx-auto max-w-5xl max-h-screen'>
       <h1 className='my-10 text-xl'>Online yuzlenme ugratmak</h1>
      <Form/>
      <Documents/>
   </div>
  )
}

export default App
