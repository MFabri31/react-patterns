import ContainerPresentational from "./components/ContainerPresentational/ContainerPresentational";

function App() {
  return (
    <>
      <main className="container ">
        <h1
          style={{ textAlign: "center", padding: "1em 0" }}
          className="mx-auto"
        >
          React Patterns
        </h1>

        <hr />

        <ContainerPresentational />
      </main>
    </>
  );
}

export default App;
