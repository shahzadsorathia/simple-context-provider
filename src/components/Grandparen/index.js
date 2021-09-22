import Three from '../Child'

const Two = () => {
  return (
    <div>
      <h3>I'm the parent.</h3>
      <Three />
    </div>
  );
}

export default Two;