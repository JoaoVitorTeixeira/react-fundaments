import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter.tsx'
import Fragment from './components/basics/Fragment.tsx'

ReactDOM.render(
    <div>
        <First></First>
        <WithParameter></WithParameter>
        <Fragment></Fragment>
    </div>,
    document.getElementById('root'))