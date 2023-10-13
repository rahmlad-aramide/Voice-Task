import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-lg text-center">
        <h1 className="mb-8 text-7xl font-extrabold text-primary">Voice Task</h1>
        <p className="mb-8 px-4 text-lg font-medium">
          Welcome to Voice Task brought to you by Microsoft Learn Student Ambassadors from Nigeria.
        </p>
        <Link to="/dashboard">
          <button className="bg-[#e8b8ff99] py-1 px-2 transition duration-200 hover:scale-90 active:scale-100">See your Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
