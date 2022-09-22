import { Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { Layout } from '../components/layouts'

export const about:NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color='primary'>About</Typography>
    </Layout>
  )
}

export default about
