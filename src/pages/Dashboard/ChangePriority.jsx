import { useEffect, useState } from 'react';

const ChangePriority = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://voice-task-dev.onrender.com/api/v1/task/654253e919aa371d6b5ab60b/priority', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          apikey: '6508b27e2b66a05e77f8e04c',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzEyMjdhMzcxZTdjYzkxMzg1YTI0YiIsImlhdCI6MTY5NzcyMTQ5NCwiZXhwIjoxNzI5Mjc5MDk0fQ.0SP2c6Evf5ENCvf_1V91wcdxs5q1qlmE6F8Xli4Fj7Q`
        },
        body: JSON.stringify({
          priority: 'medium',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    };

    fetchData().catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Data successfully updated</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ChangePriority;