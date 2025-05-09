<<<<<<< HEAD
import Link from 'next/link';

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            View
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
=======
import build from "next/dist/build";
import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1>You're signed in</h1> : <h1>You are not signedin </h1> 
};

return <h1>Landing Page</h1>;

LandingPage.getInitialProps = async ({ context }) => {
  const client = buildClient({ context });
  const { data } = await buildClient({ context }).get("/api/users/currentuser");

  return data;
>>>>>>> 58553996d4a89ee01462b41c25bc7463cc6e64e7
};

export default LandingPage;
