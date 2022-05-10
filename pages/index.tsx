import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title="HomePage">
      <Typography variant="h1">Hello Next.js 👋</Typography>
    </Layout>
  )
}

export default HomePage
