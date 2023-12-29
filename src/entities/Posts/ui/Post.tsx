import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { IPost } from '@shared/api';
import React from 'react';

export const Post = ({ createdAt, title, text, img, id, userId }: IPost) => {
  return (
    <Card sx={{height: '430px', bgcolor: '#e2e2e2'}} elevation={8}>
      <CardHeader avatar={<Avatar src={id} />} title={title} subheader={createdAt}/>
      <CardMedia height={200} src={img} component='img'/>
      <CardContent>
        <Typography variant='body2' >{text}</Typography>
      </CardContent>
    </Card>
  );
};
