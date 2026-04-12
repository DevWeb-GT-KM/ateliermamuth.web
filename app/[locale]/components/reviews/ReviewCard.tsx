import "./ReviewCard.scss";

type ReviewCardProps = {
  data: {
    name: string;
    comment: string;
    score: number;
  };
  onClick?: () => void;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ data, onClick }) => {
  return (
    <div className="home-page-review-card" onClick={onClick} style={onClick ? { cursor: "pointer" } : undefined}>
      <p className="home-page-review-card-name">{data.name}</p>
      <p className="home-page-review-card-text">{data.comment}</p>
      <div className="home-page-review-card-stars">
        {Array.from({ length: 5 }).map((_, i) => {
          const full = i + 1 <= data.score;
          const half = !full && i < data.score;
          return (
            <span
              key={i}
              className={`home-page-review-card-star${full ? " filled" : half ? " half" : ""}`}
            >
              ★
            </span>
          );
        })}
      </div>
    </div>
  );
};
