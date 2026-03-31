import Todoitem from "./Todoitem";
function Todoitems({ todoData }) {
  return (
    <>
      <div className="itemContener">
        {todoData.map((item, index) => (
          <Todoitem item={item} key={index}></Todoitem>
        ))}
      </div>
    </>
  );
}

export default Todoitems;
