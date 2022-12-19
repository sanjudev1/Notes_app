// Write your code here
import {useState} from 'react'

import {v4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  Heading,
  Image,
  Paragraph,
  TakeNote,
  Title,
  Form,
  Button,
  List,
  Container,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState()
  const [notes, setNotes] = useState()
  const [dataNotes, setDataNotes] = useState([])

  //   const onEventChange = event => {
  //     setTitle({...data, [event.target.name]: event.target.value})
  //   }
  const onFormSubmit = event => {
    event.preventDefault()

    const newData = {
      id: v4(),
      title,
      notes,
    }

    setDataNotes(prevData => [...prevData, newData])
    setTitle('')
    setNotes('')
  }

  return (
    <>
      <Container>
        <Heading>Notes</Heading>

        <Form onSubmit={onFormSubmit}>
          <Title
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <br />
          <TakeNote
            rows={30}
            cols={30}
            placeholder="Take a Note..."
            name="notes"
            value={notes}
            onChange={e => setNotes(e.target.value)}
          />
          <br />
          <Button type="submit">Add</Button>
        </Form>

        <List>
          {dataNotes.map(each => (
            <NoteItem key={each.id} noteItem={each} />
          ))}
        </List>
        {dataNotes.length < 1 && (
          <>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <Heading>No Notes Yet</Heading>
            <Paragraph>Notes you add will appear here</Paragraph>
          </>
        )}
      </Container>
    </>
  )
}
export default Notes
