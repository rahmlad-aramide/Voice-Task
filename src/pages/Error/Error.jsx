import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-lg text-center">
        <h1 className="mb-8 text-9xl font-extrabold text-primary">404</h1>
        <p className="mb-8 px-4 text-lg font-medium">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link to="/">
          <button className="bg-[#e8b8ff99] py-1 px-2 transition duration-200 hover:scale-90 active:scale-100">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
