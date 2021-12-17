import { Anchor, Nav } from 'grommet'
import React from 'react'
import * as Icons from 'grommet-icons'

const HeaderPublic = (props) => {
    return (
        <Nav direction="row" background="brand" pad="medium">
        <Anchor icon={<Icons.Home />} hoverIndicator />
        <Anchor icon={<Icons.Notification />} hoverIndicator />
        <Anchor icon={<Icons.ChatOption />} hoverIndicator />
      </Nav>
  
    )
}

export default HeaderPublic
