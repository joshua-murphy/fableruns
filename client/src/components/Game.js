import React, { Component } from 'react';
import Sidebar from './Sidebar';
import games from './games';
import { Container, Divider, Grid, Header, Segment } from 'semantic-ui-react';
import Wizzy from './Wizzy';

export default class Game extends Component {
  state = { activeItem: null, groupName: '', currentGame: {}, currentItem: {} }

  emptyState = () => (
    { activeItem: null, groupName: null, currentItem: {} }
  )

  componentDidMount() {
    this.updateGame();
  }

  componentDidUpdate() {
    this.updateGame();
  }

  updateGame = () => {
    const currentGame = games.find(g => g.link === this.props.match.params.link);

    currentGame !== this.state.currentGame && this.setState({ currentGame, ...this.emptyState() });
  }

  resetGame = () => {
    this.setState(this.emptyState());
  }

  randomText = () => {
    let length = Math.floor(Math.random() * 1000) + 100;
    let arr = [];

    const generateWord = (len) => {
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let charactersLength = characters.length;

      for (let i = 0; i < len; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    }

    for (let i = 0; i <= length; i++) {
      arr.push(generateWord(Math.floor(Math.random() * 10) + 2));
    }

    return arr.join(' ');
  }

  handleItemClick = (e, { name }) => {
    const indexes = name.split('-');

    const group = resourceGroups[indexes[0]]
    const currentItem = group.items[indexes[1]];
    currentItem.text = currentItem.text || this.randomText();

    this.setState({ activeItem: name, currentItem, groupName: group.name });
  }

  getItemText = () => {
    const { currentGame, groupName } = this.state;

    if (currentGame) {
      return(
        <div>
          <span onClick={() => { this.resetGame() }} style={{ cursor: 'pointer' }} className='highlight'>
            {currentGame.name}
          </span>

          <span style={{ float: 'right' }}>
            {groupName}
          </span>
        </div>
      )
    } else {
      return 'Game not found'
    }
  }

  displayInfoOrWizzy = () => {
    const { name, text } = this.state.currentItem;

    if (name && text) {
      return(
        <div>
          <Divider horizontal content={name} />

          { text }
        </div>
      )
    } else {
      return <Wizzy />
    }
  }

  render() {
    const { activeItem, currentGame, currentItem } = this.state;

    return(
      <Grid padded>
        <Grid.Row>
          <Grid.Column width='3'>
            <Sidebar activeItem={activeItem} currentName={currentGame.name} resourceGroups={resourceGroups} handleItemClick={this.handleItemClick} resetGame={this.resetGame} />
          </Grid.Column>

          <Grid.Column width='12'>
            <Segment inverted>
              <Header block as='h3'>
                {this.getItemText()}
              </Header>

              { this.displayInfoOrWizzy() }
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const resourceGroups = [
  {
    name: 'Resources',
    items: [
      { name: 'Tutorials' },
      { name: 'Routes' },
      { name: 'Meta' },
    ]
  }, {
    name: 'Information',
    items: [
      { name: 'Glitches' },
      { name: 'Quests' },
      { name: 'Areas' },
    ]
  }
]