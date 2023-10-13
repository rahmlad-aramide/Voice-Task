import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex h-fit justify-center items-center">
      <Bars
        height={24}
        width={70}
        radius={9}
        color="#ffffff"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
