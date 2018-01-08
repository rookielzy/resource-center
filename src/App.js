import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render () {
    return (
      <MuiThemeProvider>
        <AppBar
          title="Resource Center"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={() => {
            this.setState({open: !this.state.open})
          }}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </MuiThemeProvider>
    )
  }
}

export default App
