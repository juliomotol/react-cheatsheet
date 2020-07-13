import React from 'react';
import { Divider, Chip, FormControlLabel, Checkbox, FormGroup, Grid, CardActions } from '@material-ui/core';
import Card from './Card.js';
import CardHeader from './CardHeader.js';
import List from './List.js';
import TaggedListItem from './TaggedListItem.js';

export default class ReactComponentLifecycleCard extends React.Component {
  lifecycleTypes = {
    mounting: 'Mounting',
    updating: 'Updating',
    unmounting: 'Unmounting',
    error_handling: 'Error Handling',
  };

  constructor(props) {
    super(props);

    this.state = {
      shouldShowLegacy: false,
      shouldShowUncommon: false,
      selectedType: null,
      list: [
        {
          text: 'constructor()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#constructor',
          lifeCycleType: ['mounting'],
        },
        {
          text: 'static getDerivedStateFromProps()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops',
          lifeCycleType: ['mounting', 'updating'],
          isUncommon: true,
        },
        {
          text: 'render()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#render',
          lifeCycleType: ['mounting', 'updating'],
        },
        {
          text: 'componentDidMount()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#componentdidmount',
          lifeCycleType: ['mounting'],
        },
        {
          text: 'UNSAFE_componentWillMount()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#unsafe_componenwillmount',
          lifeCycleType: ['mounting'],
          isLegacy: true,
        },
        {
          text: 'shouldUpdateComponent()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#shouldupdatecomponent',
          lifeCycleType: ['updating'],
          isUncommon: true,
        },
        {
          text: 'getSnapshotBeforeUpdate()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate',
          lifeCycleType: ['updating'],
          isUncommon: true,
        },
        {
          text: 'componentDidUpdate()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#componentdidupdate',
          lifeCycleType: ['updating'],
        },
        {
          text: 'UNSAFE_componentWillUpdate()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate',
          lifeCycleType: ['updating'],
          isLegacy: true,
        },
        {
          text: 'UNSAFE_componentWillReceiveProps()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops',
          lifeCycleType: ['updating'],
          isLegacy: true,
        },
        {
          text: 'componentWillUnmount()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#componentwillunmount',
          lifeCycleType: ['unmounting'],
        },
        {
          text: 'getDerivedStateFromError()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#static-getderivedstateFromerror',
          lifeCycleType: ['error_handling'],
          isUncommon: true,
        },
        {
          text: 'componentDidCatch()',
          actionUrl: 'https://reactjs.org/docs/react-component.html#componentdidcatch',
          lifeCycleType: ['error_handling'],
        },
      ],
    };
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.checked });

  handleLifecylceTypeSelection = (type) =>
    this.setState({ selectedType: this.state.selectedType !== type ? type : null });

  render() {
    return (
      <Card>
        <CardHeader
          title="React.Component"
          subheader="Lifecycle"
          actionUrl="https://reactjs.org/docs/react-component.html"
        />
        <Divider />
        <List>
          {this.state.list
            .filter((item) => {
              if (!this.state.shouldShowLegacy && item.isLegacy) {
                return false;
              }
              if (!this.state.shouldShowUncommon && item.isUncommon) {
                return false;
              }
              if (this.state.selectedType) {
                return item.lifeCycleType.indexOf(this.state.selectedType) !== -1;
              }

              return true;
            })
            .map((item, index) => (
              <TaggedListItem actionUrl={item.actionUrl} text={item.text} key={index}/>
            ))}
        </List>
        <Divider />
        <CardActions>
          <Grid container spacing={1}>
            <Grid item container spacing={1}>
              {Object.keys(this.lifecycleTypes).map((key) => (
                <Grid item key={key}>
                  <Chip
                    label={this.lifecycleTypes[key]}
                    color={this.state.selectedType === key ? 'secondary' : 'default'}
                    clickable
                    onClick={() => this.handleLifecylceTypeSelection(key)}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid item>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox name="shouldShowLegacy" onChange={this.handleChange} />}
                  label="Legacy"
                />
                <FormControlLabel
                  control={<Checkbox name="shouldShowUncommon" onChange={this.handleChange} />}
                  label="Uncommon"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}
