import DogImage from "./components/ContainerPresentational/DogImage";
import withLoader from "./components/hocs/withLoader";

function App() {
  const ImagesWithLoader = withLoader(
    DogImage,
    "https://dog.ceo/api/breed/labrador/images/random/6"
  );

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
        {/* <DogImage /> */}
        <ImagesWithLoader />
      </main>
    </>
  );
}

export default App;
