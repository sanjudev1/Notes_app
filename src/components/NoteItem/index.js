// Write your code here

import {List, Paragraph, Heading} from './styledComponents'

const NoteItem = props => {
  const {noteItem} = props
  const {title, notes} = noteItem
  return (
    <>
      <List>
        <Heading>{title}</Heading>
        <Paragraph>{notes}</Paragraph>
      </List>
    </>
  )
}
export default NoteItem
