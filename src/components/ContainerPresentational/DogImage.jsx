import withLoader from "../hocs/withLoader";

function DogImage(props) {
  return props.data.message?.map((dog, index) => (
    <img src={dog} alt="Dog" key={index} />
  ));
}

export default withLoader(
  DogImage,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
