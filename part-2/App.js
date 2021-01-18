const App = () => (
  <div>
    <Tweet
      username="johnnyboy"
      name="John"
      date="03-15-15"
      message="Happy Birthday!"
    />

    <Tweet username="moonface" name="Cate" date="02-15-15" message="Hooray!!" />

    <Tweet
      username="treeman"
      name="Dan"
      date="06-15-15"
      message="Save the trees!"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
