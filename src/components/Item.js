import React, { Component } from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  letsPraiseCrom: state.cromPraised ? '--showArnold' : '--hideArnold'
})

class ShapeItem extends Component {
  render() {
    return (
      <div>
        <h1>An Item</h1>
      </div>
    )
  }
}
export default connect(mapStateToProps)(ShapeItem)
