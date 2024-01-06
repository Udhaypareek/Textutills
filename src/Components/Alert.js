import React from "react";

function Alert(props) {
  return (
    <div style={{height :'50px'}}>
     { props.alert && <div class="alert alert-success" role="alert">
      <strong>Success</strong> : {props.alert.msg}
      <button type="button" class="btn-close position-absolute end-0" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
  );
}

export default Alert;
