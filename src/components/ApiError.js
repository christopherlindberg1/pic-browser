import React from "react";



class ApiError extends React.Component {
  constructor(props) {
    super(props);

    this.defaultProps = {
      message: "Too many requests has been sent to the image api this hour"
    };
  }

  render = () => {
    console.log(this.props.message);
    const message = (this.props.message) ? this.props.message : this.defaultProps.message;

    return (
      <div className="api-error">
        <p style={{ fontSize: "1.3rem", textAlign: "center", marginTop: "2rem" }}>
          {message}
        </p>
      </div>
    )
  }
}


export default ApiError;