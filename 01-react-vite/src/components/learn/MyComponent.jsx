import "./style.css";
const Person = {
  name: "Tuan Anh",
  age: 20,
  position: "Dev",
};
const MyComponent = () => {
  return (
    <>
      <div>Dang viet ve {JSON.stringify(Person)}</div>
      <div className="child">{Person.name} dep trai</div>
      <div style={{ color: "green" }}>Nam nay {Person.age} tuoi</div>
      <div style={{ color: "green" }}>Hien tai dang lam {Person.position}</div>
    </>
  );
};

export default MyComponent;
