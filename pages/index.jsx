import { Box, Grommet } from 'grommet';

const Home = () => {
    const AppBar = (props) => (
        <Box
          tag='header'
          direction='row'
          align='center'
          justify='between'
          background='brand'
          pad={{ left: 'medium', right: 'small', vertical: 'small' }}
          elevation='medium'
          style={{ zIndex: '1' }}
          {...props}
        />
       );
      
    return (
        <AppBar>Hello Grommet!</AppBar>
    )
}

export default Home
