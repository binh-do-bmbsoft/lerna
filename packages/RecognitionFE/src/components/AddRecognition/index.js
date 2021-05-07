//@ts-check
import React from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import Suggesstion from './components/Suggestion';
import defaultStyle from './defaultStyle'

class AddRecognition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: '',
      plainTextValue: '',
      mentions: []
    };
  }
  render() {
    const { userData } = this.props;
    return (
      <div>
        <MentionsInput
          value={this.state.textAreaValue}
          onChange={(event, newValue, newPlainTextValue, mentions) =>
            this.setState({
              textAreaValue: newValue,
              plainTextValue: newPlainTextValue,
              mentions: mentions
            })
          }
          style={defaultStyle}
          allowSpaceInQuery={true}
        >
          <Mention
            trigger="@"
            data={userData}
            className={styles['mentions-style']}
            displayTransform={(id, display) => `@${display}`}
            renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (
              <Suggesstion
                highlightedDisplay={highlightedDisplay}
                search={search}
                index={index}
                focused={focused}
                suggestion={suggestion}
              />
            )}
          />
        </MentionsInput>
      </div>
    );
  }
}

AddRecognition.propTypes = {
  userData: PropTypes.array.isRequired
};

export default AddRecognition;
