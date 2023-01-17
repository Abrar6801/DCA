// import Spinner from "reactstrap";

import { Spinner } from "reactstrap";

const Spin = () =>{
  return (
    <div class="d-flex justify-content-center">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
  
};
export default Spin;