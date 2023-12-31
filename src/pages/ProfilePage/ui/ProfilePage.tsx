import { useAppSelector } from '@app/store';
import { Box, Button, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { MyPosts } from '@widgets/Posts';
import { ProfileData } from './ProfileData';
import { ProfileInfo } from './ProfileInfo';

export const ProfilePage = () => {
  const user = useAppSelector((state) => state.user.user);
  if (!user) return <></>;
  const { createdAt, name, avatar, password, email, id } = user;

  const [tabValue, setTabValue] = React.useState<any>(0);
  function onTabChange(e: any, newValue: number) {
    setTabValue(newValue);
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item>
          <ProfileData name={name} avatar={avatar}/>
        </Grid>
        <Grid item sm={6} xs={12} sx={{ display: 'flex', gap: 4 }}>
          <ProfileInfo posts='10' followers='10' following='10'/>
        </Grid>
      </Grid>
      <Tabs value={tabValue} onChange={onTabChange} sx={{mb: 3}}>
        <Tab label={'Понравившиеся'} />
        <Tab label={'Сохранённые'} />
        <Tab label={'Мои посты'} />
      </Tabs>
      <Box sx={{minHeight: 400}}>
      {tabValue === 2 && <MyPosts />}
      </Box>
    </Container>
  );
};
