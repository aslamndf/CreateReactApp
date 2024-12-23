import React from "react";

class Sample extends React.Component {
  render() {
    return (
      <>
        <h1>This is a FrontEnd Class.....</h1>
      </>
    );
  }
}

class ClassSample extends React.Component {
  render() {
    return (
      <>
        <h1>This is a React Class.....</h1>
        <Sample />
      </>
    );
  }
}

class ClassSampleNew extends React.Component {
  render() {
    return (
      <>
        <h1>This is a Backend Class.....</h1>
        <ClassSample />
      </>
    );
  }
}

export { ClassSampleNew, ClassSample, Sample };
