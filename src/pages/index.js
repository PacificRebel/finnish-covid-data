import React, { Component } from "react"
import { Column } from 'simple-flexbox';
import FirstCard from "../components/FirstCard"

class IndexPage extends Component{
  render(){
    return(

      <Column>
        <div class="container">
            <section class="cards">

            <p><FirstCard /></p>

            </section>

            <section class="cards">

            Second card

            </section>

            <section class="cards">

            Third card

            </section>
        </div>
      </Column>
    )
  }
}
export default IndexPage
