import styles from './Bar.module.scss';

type PropType = {
  handleClick: (id: number) => void;
  id: number;
  current: number;
};

const Bar = ({ handleClick, id, current }: PropType) => {
  const onClick = () => {
    handleClick(id);
  };

  let className = styles.bar;
  if (id < current) {
    className += ` ${styles.prev}`;
  } else if (id === current) {
    className += ` ${styles.cur}`;
  }

  return (
    <div
      className={className}
      onClick={onClick}
    ></div>
  );
};

export default Bar;
