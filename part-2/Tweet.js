const Tweet = (props) => {
  return (
    <div>
      <h2>
        {props.username} | {props.name} | {props.date}
      </h2>
      <p>{props.message}</p>
    </div>
  );
};
