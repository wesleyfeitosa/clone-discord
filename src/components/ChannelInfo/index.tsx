import React from 'react';

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>Chat-livre</Title>
      <Separator />
      <Description>Canal aberto para conversa</Description>
    </Container>
  );
};

export default ChannelInfo;
