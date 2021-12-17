import { Box, Main, Heading, Paragraph } from "grommet"


const Home = (props) => {
    
      
    return (
        <Box
        tag='header'
        direction='row'
        align='center'
        justify='center'
        background='primary'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        height={"100%"}
        style={{ zIndex: '1' }}
        {...props}
      >
        <Main pad="large">
  <Heading>Something</Heading>
  <Paragraph>Something about something</Paragraph>
</Main>
          </Box>
    )
}

export default Home
