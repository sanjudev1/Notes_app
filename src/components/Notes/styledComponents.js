// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 24px;
  font-family: 'Bree Serif';
`

export const Image = styled.img``
export const Paragraph = styled.p``

export const Title = styled.input`
  font-size: 20px;
  border: none;
  outline: 0px;
  margin: 3px;
`
export const TakeNote = styled.textarea`
  font-size: 16px;
  border: none;
  outline: 0px;
  margin: 3px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  background-color: white;
  border-radius: 5px;
  box-shadow: 0.1px 0px 3px 1px;
  width: 50%;
  height: 30%;
`
export const Button = styled.button`
  width: 108px;
  padding: 5px;
  background-color: blue;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 10px;
  margin-bottom: 10px;
`
export const List = styled.ul`
  list-style-type: none;
`
