import * as React from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
interface DetailCityProps {
  name: string;
}

const DetailCity: React.FC<DetailCityProps> = ({ name }) => {
  const [detailCity, setdetailCity] = useState<Array<City>>();
  return (
    <div>
      <div className="container-fluid">DashBoard / Detail</div>
      <Container>
        <Row>{name}</Row>
      </Container>
    </div>
  );
};

export default DetailCity;
