import { CirclesWithBar } from 'react-loader-spinner';

const CircleLoader = () => {
  return (
    <div className="flex h-fit justify-center items-center">
      <CirclesWithBar
        height={100}
        width={100}
        color="#ffffff"
        visible={true}
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default CircleLoader;
