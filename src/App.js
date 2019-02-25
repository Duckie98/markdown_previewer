import React, { Component } from "react";
import marked from "marked";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
    this.display =
      `# This is a h1 tag \n\n` +
      `## This is a h2 tag \n\n` +
      `Here is a link to my github repo: [links](https://www.freecodecamp.com) \n\n` +
      "Lets say hello in ES6: ``` console.log('Hello'); ``` \n\n" +
      `You can also make text **bold**... whoa! \n\n` +
      `> My fav quote: No pain, No gain ! \n\n` +
      "- And of course there are lists.\n\t - Some are bulleted.\n\t  - With different indentation levels. \n\n" +
      "![React Logo w/ Text](https://goo.gl/Umyytc)\n\n" +
      "``` \nfunction anotherExample(firstLine, lastLine) { \n\t if (firstLine == '```' && lastLine == '```' { \n\t\t return multiLineCode; \n\t } \n}\n```";
  }
  handleInput = e => {
    this.setState({
      userInput: e.target.value
    });
    console.log(this.state.userInput);
  };
  componentWillMount() {
    this.setState({
      userInput: this.display
    });
  }
  render() {
    return (
      <div className="App">
        <h1 className="header">Markdown Previewer</h1>
        <div className="container">
          <div>
            <label for="editor">Editor:</label>
            <textarea
              name="editor"
              id="editor"
              onChange={this.handleInput}
              value={this.state.userInput}
            />
          </div>
          <label for="preview">Previewer:</label>
          <div
            id="preview"
            className="textOutput"
            dangerouslySetInnerHTML={{ __html: marked(this.state.userInput) }}
          />
        </div>
      </div>
    );
  }
}

export default App;
