import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : (</p>;
  return (
    <div className="App">
      <h1>my first apollo app</h1>
      <hr />
      {data.launches.map((launche, { launch_success, rocket, links }) => (
        <ul>
          <li>Launch date : {launche.launch_date_utc}</li>
          <li>Success Launch : {launche.launch_success}</li>
          <br />
          <li>Rocket Name : {launche.rocket.rocket_name}</li>
          <br />
          <li>Link : {launche.links.video_link}</li>
          <br />
          <li>Description : {launche.details}</li>
          <br />
          <hr />
        </ul>
      ))}
    </div>
  );
}

export default App;
