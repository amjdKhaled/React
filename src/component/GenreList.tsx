import useGenres from "../Hooks/useGenres";
import useData from "../Hooks/useData";

const getCroppedImageUrl = (url: string) => {
  // Replace this with your actual image cropping logic
  return url; // or crop using a utility function
};

export const GenreList = () => {
  const { data: genres, error } = useGenres();

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <ul className="list-unstyled">
      {genres.map((genre) => (
        <li key={genre.id} className="d-flex align-items-center mb-3">
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            width="32"
            height="32"
            className="rounded me-2"
          />
          <span>{genre.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
