import React from 'react'
class NoMatch extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h3>No match for <code>{this.props.location.pathname}</code></h3>
      </div>
    )
  }
}
export default NoMatch
