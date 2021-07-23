import React from 'react';
import Select from 'react-select';
//const { Option } = components;
// const IconOption = (props) => (
//   <Option {...props}>
    
//     {props.data.label}
//   </Option>
// )

 
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla', isDisabled: true }
];
 
export default class ReactSelect extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}