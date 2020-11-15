import React, { Component } from "react"
import { Column } from 'simple-flexbox';

class IndexPage extends Component{
  render(){
    return(

      <Column>
        <div class="container">
            <section class="cards">

            First card

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
