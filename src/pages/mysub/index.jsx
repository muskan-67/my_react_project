const subscriptionData = [
  {
    id: 1,
    name: "Basic Plan",
    status: "Active",
  },
  {
    id: 2,
    name: "Pro Plan",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Enterprise Plan",
    status: "Active",
  },
];

const MySub = () => {
  return (
    <div className="my-subscriptions">
      <h2>My Subscriptions</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {subscriptionData.map((sub) => (
            <tr key={sub.id}>
              <td>{sub.id}</td>
              <td>{sub.name}</td>
              <td>{sub.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MySub;