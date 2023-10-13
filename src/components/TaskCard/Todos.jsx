import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const Todos = ({done, completed, todo}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(()=> {
    done && setIsChecked(true);
  }, [done])

  return (
    <div className='flex'>
      <input
        type="checkbox"
        name='todo'
        checked={isChecked}
        onChange={handleCheckboxChange}
        className='ml-1 mr-3'
        disabled={completed}
      />
      <p id='todo' 
        className={isChecked? "text-[#4a4a477f] text-sm": "text-secondary text-sm"}
      >
        {todo}
      </p>
    </div>
  );
};

export default Todos;
