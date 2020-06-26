import React from 'react';
import {
  IconButton,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Link,
  ListItemSecondaryAction,
  Chip,
  Divider,
  CardActions
} from '@material-ui/core';
import { Launch } from '@material-ui/icons';
import './CardList.scss';

export default class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasHover: false };
  }

  handleHover = (hasHover) => this.setState({ hasHover: hasHover });

  render() {
    let { title, subheader, actionUrl, list, cardActions } = this.props;

    return (
      <Card
        className="card-list"
        raised={this.state.hasHover}
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
      >
        <CardHeader
          title={title}
          subheader={subheader}
          action={
            actionUrl && (
              <Link href={actionUrl} color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
                <IconButton>
                  <Launch aria-label="open page" />
                </IconButton>
              </Link>
            )
          }
        />
        <Divider />
        <List component="div" disablePadding className="card-list_list">
          {list &&
            list.map((item, index) => (
              <React.Fragment key={index.toString()}>
                <Link href={item.href} color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
                  <ListItem button>
                    <ListItemText primary={item.title} />
                    {item.tag && (
                      <ListItemSecondaryAction>
                        <Chip label={item.tag} size="small" variant="outlined" />
                      </ListItemSecondaryAction>
                    )}
                  </ListItem>
                </Link>
                {item.subList &&
                  item.subList.map((item, key) => (
                    <ListItem dense key={key}>
                      <ListItemText inset primary={item.title} />
                    </ListItem>
                  ))}
              </React.Fragment>
            ))}
        </List>
        {cardActions && (
          <>
            <Divider />
            <CardActions>{cardActions}</CardActions>
          </>
        )}
      </Card>
    );
  }
}
