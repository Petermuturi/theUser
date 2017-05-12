import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/Actions';
import { View, Text } from 'react-native';

const AddNumber = ({addNumber, setAddNumber})=> {
  return(
    <View>
      <Text>{addNumber}</Text>
    </View>
  )
}

const mapStateToProps = (state)=> {
  return {
    addNumber: state.addNumber,
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    setAddNumber: (number)=> {
      dispatch(actions.setAddNumber(number))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNumber);
