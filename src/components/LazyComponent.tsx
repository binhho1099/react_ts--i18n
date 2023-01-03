import React from 'react';

function LazyComponent() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setData(data));
    }, 10000);
  }, []);

  return (
    <div>
      {data.map((da) => (
        <p>{JSON.stringify(da)}</p>
      ))}
    </div>
  );
}

export default LazyComponent;
