const Person = (props) => {
  let vote = props.age >= 18 ? "VOTE!" : "Must be 18 to vote.";

  let hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn about this person: </p>
      <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>
          Hobbies:
          <ul>{hobbies}</ul>
        </li>
      </ul>
      <h3>{vote}</h3>
    </div>
  );
};
