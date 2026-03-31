function Todoitem({ item }) {
  return (
    <>
      <div className="container">
        <div className="row kgRow">
          <div className="col-5">{item.todoname}</div>
          <div className="col-5">{item.tododate}</div>
          <div className="col-2">
            <button className="btn btn-danger kgButton">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoitem;
