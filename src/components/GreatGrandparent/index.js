import Grandparent from '../Parent'

const GreatGrandparent = () => {
  return (
    <div>
      <h2>I'm the grandparent!</h2>
      <Grandparent />
    </div>
  );
}

export default GreatGrandparent;