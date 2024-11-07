import { useState, useEffect } from "react";
import DogImage from "./DogImage";

export const DogImageContainer = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setDogs(message));
  }, []);

  return <DogImage dogs={dogs} />;
};

export default DogImageContainer;
