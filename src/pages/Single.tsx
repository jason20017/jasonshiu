import { useLocation } from "react-router-dom";

const Single = () => {
  const location = useLocation();

  // 獲取從Link組件傳遞過來的數據
  const { date, title, content } = location.state;

  return (
    <div className="single_container">
      <div className="single_header">
        <h2 className="single_titles">{title}</h2>
        <p className="single_dates">{date}</p>
      </div>
      <p className="single_contents">{content}</p>
    </div>
  );
};

export default Single;
