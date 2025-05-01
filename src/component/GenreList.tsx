import useGenres, { Genre } from "../Hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  darkMode: boolean;
}

const getCroppedImageUrl = (url: string) => {
  return url;
};

export const GenreList = ({ onSelectGenre, darkMode }: Props) => {
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
          <button
            onClick={() => onSelectGenre(genre)}
            className={`btn btn-link text-start ${
              darkMode ? "text-white" : "text-dark"
            }`}
            style={{ textDecoration: "none" }}>
            {genre.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
