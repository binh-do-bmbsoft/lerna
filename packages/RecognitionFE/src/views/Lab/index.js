//@ts-check
import React, { useState } from 'react';
import AddRecognition from 'src/components/AddRecognition';
import { usersSuggesstion } from 'src/__mocks__/addRecognition/users';
class LabScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' };
  }
  render() {
    return (
      <div>
        Nhập
        <AddRecognition userData={usersSuggesstion} />
      </div>
    );
  }
}

export default LabScreen;
