import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home-OpenJira'>

      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}>
            <CardHeader title="pendientes" />
            <CardContent>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}>
            <CardHeader title="En progreso" />
            <CardContent>
              
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px)'}}>
            <CardHeader title="Completadas" />
            <CardContent>
              
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      <Typography variant='h1' color='primary'></Typography>
    </Layout>
  )
}

export default HomePage;
