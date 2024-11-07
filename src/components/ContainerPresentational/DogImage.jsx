const DogImage = ({ dogs }) => {
  return dogs.map((dog, i) => <img key={i} src={dog} alt="Dog" />);
};

export default DogImage;
