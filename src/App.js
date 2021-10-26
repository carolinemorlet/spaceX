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

      {data.launches.map((launch, { rocket, links }) => (
        <ul>
          <li>Launch date : {launch.launch_date_utc}</li>
          <br />

          <li>
            Success Launch :{' '}
            {launch.launch_success === true ? 'success' : 'failed'}
          </li>
          <br />
          <li>Rocket Name : {launch.rocket.rocket_name}</li>
          <br />
          <li>Link : {launch.links.video_link}</li>
          <br />
          <li>Description : {launch.details}</li>
          <br />
          <hr />
        </ul>
      ))}
    </div>
  );
}

export default App;
