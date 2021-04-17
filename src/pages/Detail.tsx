import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailItem from "../components/detail/DetailItem";

interface DetailProps {}

const Detail: React.FC<DetailProps> = () => {
  // const [city, setCity] = useState();
  const { city } = useParams<{ city: string }>();
  useEffect(() => {
    alert(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="wrapper">
      <DetailItem name={city} />
    </div>
  );
};

export default Detail;
