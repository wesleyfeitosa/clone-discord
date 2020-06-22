import React from 'react';

import { Container } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Container
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && (
        <img
          src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"
          alt="Logo rocketseat"
        />
      )}
    </Container>
  );
};

export default ServerButton;
