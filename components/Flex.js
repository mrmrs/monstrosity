import React from 'react'

import glamorous from 'glamorous'
import { space, width, maxWidth, height, size, ratio, display, flex, alignItems, justifyContent, flexWrap, flexDirection, alignContent, order, flexBasis, fontSize, textAlign, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Div = glamorous.div(space, width, maxWidth, height, size, ratio, display, alignItems, justifyContent, flexWrap, flexDirection, alignContent, order, flexBasis, fontSize, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

const Flex = ({...props}) => {

  return (
    <Div {...props}>
       {props.children}
    </Div>
  )
}

Flex.defaultProps = {
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center'
}

export default Flex
