import React from 'react'
import { Box } from 'grommet'
import { Grommet } from 'grommet';
import HeaderPublic from '../../components/header/HeaderPublic';
import FooterPublic from '../../components/footer/FooterPublic';

 const LayoutPublic = ({children}) => {


    return (
      <Grommet plain>

        <HeaderPublic />
      
        <Box pad="medium" height={"100vh"}>
            {children}
            </Box>
        <FooterPublic />
      </Grommet>
    )
}
export default LayoutPublic