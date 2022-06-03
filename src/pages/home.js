import useFetch from "../hooks/useFetch";
import { Row, Col } from "antd";
import SliderMovies from "../components/SliderMovies";
import { URL_API, API } from "../utils/constants";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );

  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
  );

  const topRateMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es-Es&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Peliculas Populares" movies={popularMovies} />
        </Col>
        <Col span={12}>
          <MovieList title="Top Mejores Peliculas Puntuadas" movies={topRateMovies} />
        </Col>
      </Row>
      <Footer />
    </>
  );
}
