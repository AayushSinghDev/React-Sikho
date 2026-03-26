function Random() {
  let random = Math.random() * 100;
  return (
    <>
      <h3 style={{ "background-color": "red" }}>
        Random no is: {Math.round(random)}
      </h3>
    </>
  );
}

export default Random;
