import React from 'react'
import { Anchor, Box, Nav } from 'grommet'
import React from 'react'
import Icons from 'grommet-icons'


 const LayoutPublic = ({children}) => {


    return (
        <Box
        direction="column"
        border={{ color: 'brand', size: 'large' }}
        pad="medium"
      >
      <Nav direction="row" background="brand" pad="medium">
        <Anchor icon={<Icons.Home />} hoverIndicator />
        <Anchor icon={<Icons.Notification />} hoverIndicator />
        <Anchor icon={<Icons.ChatOption />} hoverIndicator />
      </Nav>
      
        <Box pad="medium" background="light-3" >
            {children}
            </Box>
      </Box>
    )
}
export default LayoutPublic