
const Home = () => {
  // ========== LESSON ==========
  // Docs: https://reactjs.org/docs/context.html

  // Definition from docs: Context provides a way to pass data through the component tree without having to pass props down manually at every level.

  // WHEN TO USE IT
  // Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
  
  return (
    <div>
      <h1>CONTEXT PROVIDER AND USECONTEXT</h1>
      <ul>
        <li>Go to the repo. Clone it down to your lessons folder.</li>
        <li>Don't forget to cd in the directory and run "npm i" in your terminal.</li>
        <li>Run "npm start" and get this to show up.</li>
      </ul>
    </div>
  );
}

export default Home;