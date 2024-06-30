import React from 'react'
import { Grid, SvgIcon, Typography } from '@mui/material'
import css from './styles.module.css'
import CheckFilled from '@/public/images/common/check-filled.svg'

import WelcomeLogin from './WelcomeLogin'
import ExternalLink from '../common/ExternalLink'
import { ASH_URL } from '@/config/constants'

const BulletListItem = ({ text }: { text: string }) => (
  <li>
    <SvgIcon className={css.checkIcon} component={CheckFilled} inheritViewBox />
    <Typography color="static.main" fontWeight={700}>
      {text}
    </Typography>
  </li>
)

const NewSafe = () => {
  return (
    <>
      <Grid container spacing={3} p={3} pb={0} flex={1} direction="row-reverse">
        <Grid item xs={12} lg={6}>
          <WelcomeLogin />
        </Grid>
        <Grid item xs={12} lg={6} flex={1}>
          <div className={css.content}>
            <Typography variant="h1" fontSize={[44, null, 52]} lineHeight={1} letterSpacing={-1.5} color="static.main">
              S4S - Safe for Subnets
            </Typography>

            <Typography mb={1} color="static.main">
              S4S (Safe for Subnets) is a shared infrastructure aimed at bringing all the features of Safe to the
              Avalanche Subnets ecosystem. <br></br>
              Read the official announcement and learn how to get your Subnet indexed{' '}
              <ExternalLink
                href="https://ashavax.hashnode.dev/announcing-s4s-safe-for-subnets-hosted-by-ash"
                noIcon
                sx={{ span: { textDecoration: 'underline' } }}
                color="#000000"
              >
                here
              </ExternalLink>
              .
            </Typography>

            <ul className={css.bulletList}>
              <li>
                <SvgIcon className={css.checkIcon} component={CheckFilled} inheritViewBox />
                <Typography color="static.main" fontWeight={700}>
                  All the features of{' '}
                  <ExternalLink
                    href="https://safe.global/"
                    noIcon
                    sx={{ span: { textDecoration: 'underline' } }}
                    color="#000000"
                  >
                    Safe
                  </ExternalLink>
                </Typography>
              </li>
              <BulletListItem text="Hosted indexing and Safe{Wallet} for Avalanche Subnets" />
              <li>
                <SvgIcon className={css.checkIcon} component={CheckFilled} inheritViewBox />
                <Typography color="static.main" fontWeight={700}>
                  Made with 🖤 by{' '}
                  <ExternalLink href={ASH_URL} noIcon sx={{ span: { textDecoration: 'underline' } }} color="#000000">
                    Ash
                  </ExternalLink>
                </Typography>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default NewSafe
