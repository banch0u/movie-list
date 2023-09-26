'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/users/usersSlice';
const TesComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers('users'));
  }, [dispatch]);
  return (
    <>
      {loading === 'pending' ? <div>Loading...</div> : null}
      {loading === 'idle' ? (
        <div>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.name}</h1>
              </div>
            );
          })}
        </div>
      ) : null}
      {error !== null ? <div>{error}</div> : null}
    </>
  );
};

export default TesComponent;
