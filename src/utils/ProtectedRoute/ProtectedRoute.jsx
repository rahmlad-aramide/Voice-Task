/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet } from 'react-router-dom';
import { cookieStorage } from '@ibnlanre/portal';
import Loader from '../Loader/Loader';
import { useMutationContext } from '../../contexts/MutationContext/MutationContext';

const ProtectedRoute = () => {
  const {isFetcingData} = useMutationContext()

  const token = cookieStorage.getItem('token')
 
  if(isFetcingData){
    return (
      <div className="bg-gray-200 h-screen overflow-y-auto">
        <div className="flex h-[calc(100%_-_80px)] bg-white m-4 md:m-10 rounded-lg justify-center items-center">
          <Loader color={'#C13DFF'} />
        </div>
      </div>
    )
  }

  return token ? <Outlet /> : <Navigate to="/login" />
}
export default ProtectedRoute;
