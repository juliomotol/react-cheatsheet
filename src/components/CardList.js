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
  CardActions,
  Collapse,
} from '@material-ui/core';
import { Launch, ExpandLess, ExpandMore } from '@material-ui/icons';
import './CardList.scss';

export default class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasHover: false,
      expandedSublist: null,
    };
  }

  handleHover = (hasHover) => this.setState({ hasHover: hasHover });

  toggleSublist = (event, subList) => {
    event.preventDefault();

    this.setState({ expandedSublist: subList !== this.state.expandedSublist ? subList : null });
  };

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
              <Link href={actionUrl} color="inherit" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="view page">
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
                  <ListItem component="div" button>
                    <ListItemText primary={item.title} />
                    {item.tag && <Chip label={item.tag} size="small" variant="outlined" />}
                    {item.subList && (
                      <ListItemSecondaryAction onClick={(event) => this.toggleSublist(event, item.title)}>
                        <IconButton aria-label="expand sublist" edge="end">
                          {this.state.expandedSublist === item.title ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                      </ListItemSecondaryAction>
                    )}
                  </ListItem>
                </Link>
                {item.subList && (
                  <>
                    <Collapse in={this.state.expandedSublist === item.title}>
                      <ListItem component="div">
                        <List disablePadding>
                          {item.subList.map((item, key) => (
                            <ListItem dense key={key}>
                              <ListItemText primary={item.title} />
                            </ListItem>
                          ))}
                        </List>
                      </ListItem>
                      <Divider />
                    </Collapse>
                  </>
                )}
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
