import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './store';
import { ProfilePage } from '@pages/ProfilePage';
import { PostList } from '@widgets/Posts';
import { NotFoundPage } from '@pages/NotFoundPage';

export const Routers = () => {
  const user = useAppSelector((state) => state.user.user);

  if (user)
    return (
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
