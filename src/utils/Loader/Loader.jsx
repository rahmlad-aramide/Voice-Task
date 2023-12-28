import { Bars } from 'react-loader-spinner';

// eslint-disable-next-line react/prop-types
const Loader = ({color}) => {
  return (
    <div className="flex h-fit justify-center items-center">
      <Bars
        height={24}
        width={70}
        radius={9}
        color={color? color :"#C13DFF"}
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
