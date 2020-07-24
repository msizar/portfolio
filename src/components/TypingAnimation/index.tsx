import React from 'react';
import useStyles from './styles';

type Props = {
  children: string;
};
export const TypingAnimation = ({ children }: Props) => {
  const classes = useStyles();
  return <h1 className={classes.typingTitle}>{children}</h1>;
};

export default TypingAnimation;
