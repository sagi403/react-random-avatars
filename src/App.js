const App = () => {
  const color = randomColor();
  // let avatar = new Array(16)

  let avatar = Array.from({ length: 16 }, () =>
    Array.from({ length: 16 }).map(() => randomColor())
  );
  console.log(avatar);

  return <h1 style={{ color }}>{avatar}</h1>;
};

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default App;
