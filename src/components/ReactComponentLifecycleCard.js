import React from 'react';
import { Chip, FormControlLabel, Checkbox, FormGroup, Grid } from '@material-ui/core';
import CardList from './CardList';

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
          title: 'constructor()',
          href: 'https://reactjs.org/docs/react-component.html#constructor',
          lifeCycleType: ['mounting'],
        },
        {
          title: 'static getDerivedStateFromProps()',
          href: 'https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops',
          lifeCycleType: ['mounting', 'updating'],
          isUncommon: true,
        },
        {
          title: 'render()',
          href: 'https://reactjs.org/docs/react-component.html#render',
          lifeCycleType: ['mounting', 'updating'],
        },
        {
          title: 'componentDidMount()',
          href: 'https://reactjs.org/docs/react-component.html#componentdidmount',
          lifeCycleType: ['mounting'],
        },
        {
          title: 'UNSAFE_componentWillMount()',
          href: 'https://reactjs.org/docs/react-component.html#unsafe_componenwillmount',
          lifeCycleType: ['mounting'],
          isLegacy: true,
        },
        {
          title: 'shouldUpdateComponent()',
          href: 'https://reactjs.org/docs/react-component.html#shouldupdatecomponent',
          lifeCycleType: ['updating'],
          isUncommon: true,
        },
        {
          title: 'getSnapshotBeforeUpdate()',
          href: 'https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate',
          lifeCycleType: ['updating'],
          isUncommon: true,
        },
        {
          title: 'componentDidUpdate()',
          href: 'https://reactjs.org/docs/react-component.html#componentdidupdate',
          lifeCycleType: ['updating'],
        },
        {
          title: 'UNSAFE_componentWillUpdate()',
          href: 'https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate',
          lifeCycleType: ['updating'],
          isLegacy: true,
        },
        {
          title: 'UNSAFE_componentWillReceiveProps()',
          href: 'https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops',
          lifeCycleType: ['updating'],
          isLegacy: true,
        },
        {
          title: 'componentWillUnmount()',
          href: 'https://reactjs.org/docs/react-component.html#componentwillunmount',
          lifeCycleType: ['unmounting'],
        },
        {
          title: 'getDerivedStateFromError()',
          href: 'https://reactjs.org/docs/react-component.html#static-getderivedstateFromerror',
          lifeCycleType: ['error_handling'],
          isUncommon: true,
        },
        {
          title: 'componentDidCatch()',
          href: 'https://reactjs.org/docs/react-component.html#componentdidcatch',
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
      <CardList
        title="React.Component"
        subheader="LifeCycle"
        actionUrl="https://reactjs.org/docs/react-component.html"
        list={this.state.list.filter((item) => {
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
        })}
        cardActions={
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
        }
      />
    );
  }
}
