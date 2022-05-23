import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import { URL_API, API } from "../utils/constants";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies}/>
    </>
  );
}
