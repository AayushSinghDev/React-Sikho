import Todoitem from "./Todoitem";
function Todoitems({ todoData, handelOnDelete }) {
  return (
    <>
      <div className="itemContener">
        {todoData.map((item, index) => (
          <Todoitem
            item={item}
            key={index}
            handelOnDelete={handelOnDelete}
          ></Todoitem>
        ))}
      </div>
    </>
  );
}

export default Todoitems;
