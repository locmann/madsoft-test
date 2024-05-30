import { PropsWithChildren } from 'react';

const Question = ({ children }: PropsWithChildren) => {
  return <h3>{children}</h3>;
};

export default Question;
