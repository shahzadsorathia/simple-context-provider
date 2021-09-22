import Parent from '../Parent'

const GrandParent = () => {
  return (
    <div>
      <h3>I'm the parent.</h3>
      <Parent />
    </div>
  );
}

export default GrandParent;