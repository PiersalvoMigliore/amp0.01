import * as React from 'react';
import {Grid, Box, styled, Typography, Button} from '@mui/material';


const HeaderButton = styled(Button)(({ theme }) => ({
  textAlign: 'center',
  textTransform: 'none',
  color: 'black',
  fontSize: 15,
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#3076FF',
  },
}));

const TouchableButton = ({title}) => (
  <HeaderButton disableRipple variant="text">{title}</HeaderButton>
)

function Header() {
  return (
    <Box sx={{ flexGrow: 1, height: 80, alignItems:'center', display: 'flex' }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography>AmplioNow</Typography>
        </Grid>
        <Grid item xs={6} sx={{ flexGrow: 1, alignItems:'center', display: 'flex' }}>
          <Grid item xs={2} md={2}>
            <TouchableButton title="Templates"/>
          </Grid>
          <Grid item xs={2} md={2}>
            <TouchableButton title="Integration"/>
          </Grid>
          <Grid item xs={2} md={2}>
            <TouchableButton title="Pricing"/>
          </Grid>
          <Grid item xs={2} md={2}>
            <TouchableButton title="Steps"/>
          </Grid>
          <Grid item xs={2} md={2}>
            <TouchableButton title="Features"/>
          </Grid>
          <Grid item xs={2} md={2}>
            <TouchableButton title="Ask Us"/>
          </Grid>
          <Grid item xs={2} md={2}>
            <TouchableButton title="About"/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header