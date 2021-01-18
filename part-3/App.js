const App = () => (
  <div>
    <Person name="Terry" age={17} hobbies={["basketball", "basket-weaving"]} />
    <Person name="Larry" age={20} hobbies={["sleeping", "eating"]} />
    <Person
      name="Jerry"
      age={98}
      hobbies={[
        "breakdancing",
        "mountain climbing",
        "spulunking",
        "bull riding"
      ]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
