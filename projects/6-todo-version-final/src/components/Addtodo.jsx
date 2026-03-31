import { useState } from "react";
import { MdAddReaction } from "react-icons/md";
function Addtodo({ handelvalueadded }) {
  const [addname, setname] = useState("");
  const [adddate, setdate] = useState("");

  const handelOnnameChange = (e) => {
    console.log(e.target.value);
    setname(e.target.value);
  };
  const handelOndateChange = (e) => {
    console.log(e.target.value);
    setdate(e.target.value);
  };
  const handelonadd = () => {
    handelvalueadded(addname, adddate);
    setname("");
    setdate("");
  };
  return (
    <>
      <div className="container ">
        <div className="row kgRow">
          <div className="col-5">
            <input type="text" value={addname} onChange={handelOnnameChange} />
          </div>
          <div className="col-5">
            <input type="date" value={adddate} onChange={handelOndateChange} />
          </div>
          <div className="col-2">
            <button
              className="btn btn-success kgButton"
              onClick={() => handelonadd()}
            >
              <MdAddReaction />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtodo;
