import React, { Component } from "react"
import { Column } from 'simple-flexbox';
import FirstCard from "../components/FirstCard"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>

        <div class="container">
            <section class="cards">
            <div class="header">
            <p><h2> THL Covid-19 data </h2></p>
            </div>
            <p><FirstCard /></p>

            </section>

            <section class="cards">

            Second card

            </section>

            <section class="cards">

            Third card

            </section>
        </div>
      </Layout>
    )

export default IndexPage
