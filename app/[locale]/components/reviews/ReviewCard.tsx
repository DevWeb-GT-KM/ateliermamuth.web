import "./ReviewCard.scss";

type ReviewCardProps = {
  data: {
    name: string;
    review: string;
    stars: number;
  };
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ data }) => {
  return (
    <div className="home-page-review-card">
      <p className="home-page-review-card-name">{data.name}</p>
      <p className="home-page-review-card-text">{data.review}</p>
      <div className="home-page-review-card-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`home-page-review-card-star${i < data.stars ? " filled" : ""}`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};
