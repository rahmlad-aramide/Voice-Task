/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cookieStorage } from '@ibnlanre/portal';
import { useToken } from '../../contexts/AuthContext/AuthContext';
import CircleLoader from '../CircleLoader/CircleLoader';

const ProtectedRoute = () => {
  const { token, setToken } = useToken();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const token = cookieStorage.getItem('token')
    if(token){
      setToken(token);
    }
    setIsLoading(false);
  }, []);

  if(isLoading){
    return (
      <div className="bg-gray-200 h-full md:h-[calc(100vh_-_60px)] overflow-y-auto">
        <div className="flex mt-8 h-[50vh] bg-white m-10 rounded-lg justify-center items-center">
          <CircleLoader />
        </div>
      </div>
    )
  }

  return token ? <Outlet /> : <Navigate to="/login" />
}
export default ProtectedRoute;
