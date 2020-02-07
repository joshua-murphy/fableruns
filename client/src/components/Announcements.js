import React, { Component } from 'react';
import { Divider, ListItem, Segment } from 'semantic-ui-react'

export default class Announcements extends Component {
  render() {
    return(
      messages.map(({ title, text }, i) => (
        <Segment as={ListItem} inverted raised key={i}>
          <Divider horizontal style={{ fontSize: 22 }} content={title} />
          <Segment inverted attached content={text} />
        </Segment>
      ))
    );
  }
}

const messages = [
  { title: 'Welcome', text: 'Hey everyone! Welcome to Fableruns, a place where the Fable speedrunning community is gathering useful game information to help newcommers and veterans alike.' },
  { title: 'Welcome', text: 'Hey everyone! This is Fableruns, a place where the Fable speedrunning community is gathering useful game information to help newcommers and veterans alike.' },
  { title: 'Welcome', text: 'Hey everyone! This is Fableruns, a place where the Fable speedrunning community is gathering useful game information to help newcommers and veterans alike.' },
]