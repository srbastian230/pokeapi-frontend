interface Props {
  percentage: number;
}

export const ProgressBar = (props: Props) => {
  const { percentage } = props;
  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ width: `${percentage > 100 ? 100 : percentage}%` }}
      >
        <span className="progress-bar-text">{`${percentage}%`}</span>
      </div>
    </div>
  );
};
