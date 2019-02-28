import React from 'react'
import { asPage } from 'lib'
import { getBeerById } from 'services/beer'
const Detail = props => <h1>hello world</h1>

Detail.getInitialProps = async ({ query = {} }) => {
  console.log('the ctx', query)
  try {
    const { data } = await getBeerById(query.id)
    return { data }
  } catch (error) {
    console.log('error', error)
    return { error }
  }
}

export default asPage(Detail)
