import React from 'react';
import useStyles from './styles';

type Props = {
  children: any;
};
export const Title = ({ children }: Props) => {
  const classes = useStyles();
  return <h2 className={classes.title}>{children}</h2>;
};

export const SubTitle = ({ children }: Props) => {
  const classes = useStyles();
  return <h2 className={classes.subTitle}>{children}</h2>;
};

export const Heading = ({ children }: Props) => {
  const classes = useStyles();
  return <h1 className={classes.heading}>{children}</h1>;
};

export const Text = ({ children }: Props) => {
  const classes = useStyles();
  return <p className={classes.text}>{children}</p>;
};

export const ErrorText = ({ children }: Props) => {
  const classes = useStyles();
  return <p className={classes.errorText}>{children}</p>;
};
