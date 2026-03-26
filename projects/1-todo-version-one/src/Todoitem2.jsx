function Todoitem2() {
  let todoname = "Go to Collage";
  let tododate = "04/10/2023";
  return (
    <>
      <div className="container ">
        <div className="row kgRow">
          <div className="col-5">{todoname}</div>
          <div className="col-5">{tododate}</div>
          <div className="col-2">
            <button className="btn btn-danger kgButton">Add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoitem2;
