import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExample = () => (
  <Segment>
    <Dimmer active="false">
      <Loader />
    </Dimmer>

    <Image src='/assets/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderExample