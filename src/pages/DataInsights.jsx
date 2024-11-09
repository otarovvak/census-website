import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { Line, Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const DataInsights = () => {
  // Summary Statistics
  const totalPopulationCovered = 95; // as percentage
  const interviewsCompleted = 425000; // Approximate value
  const participationRate = "95%";

  // Pie Chart Data (Demographic Breakdown)
  const pieChartData = {
    labels: [
      "Young Professionals (25-40)",
      "Families with Children",
      "Senior Citizens",
    ],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#007bff", "#28a745", "#ffc107"],
        hoverBackgroundColor: ["#0056b3", "#1d7a33", "#e0a800"],
      },
    ],
  };

  // Line Chart Data (Population Growth Trends)
  const lineChartData = {
    labels: [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    datasets: [
      {
        label: "Population Growth (in thousands)",
        data: [950, 980, 1000, 1050, 1100, 1150, 1175, 1190, 1210, 1225],
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
      },
    ],
  };

  // Bar Chart Data (Budget Breakdown)
  const barChartData = {
    labels: [
      "Personnel Costs",
      "Technology & Infrastructure",
      "Marketing & Public Awareness",
      "Data Security",
      "Miscellaneous Costs",
    ],
    datasets: [
      {
        label: "Budget Allocation (in tenge)",
        data: [15000000, 7200000, 3300000, 1700000, 2000000],
        backgroundColor: [
          "#6f42c1",
          "#ffc107",
          "#28a745",
          "#007bff",
          "#dc3545",
        ],
      },
    ],
  };

  return (
    <Container fluid className="data-insights my-5">
      <h2 className="text-center mb-5">Data Insights - Astana Census 2024</h2>

      {/* Summary Cards */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Population Coverage</Card.Title>
              <Card.Text>
                {totalPopulationCovered}% of Astana's population covered
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Interviews Completed</Card.Title>
              <Card.Text>{interviewsCompleted.toLocaleString()}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Participation Rate</Card.Title>
              <Card.Text>{participationRate}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Charts Section */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="p-3">
            <Card.Title>Demographic Breakdown</Card.Title>
            <Pie data={pieChartData} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3">
            <Card.Title>Population Growth Trends</Card.Title>
            <Line data={lineChartData} />
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={12}>
          <Card className="p-3">
            <Card.Title>Budget Allocation</Card.Title>
            <Bar data={barChartData} />
          </Card>
        </Col>
      </Row>

      {/* Recent Data Insights Table */}
      <Row>
        <Col md={12}>
          <Card className="p-3">
            <Card.Title>Recent Data Insights</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category</th>
                  <th>Detail</th>
                  <th>Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Population Growth</td>
                  <td>
                    High concentration of young professionals (25-40 years)
                  </td>
                  <td>Potential for economic growth and workforce expansion</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Household Composition</td>
                  <td>Growth in larger family units</td>
                  <td>Increased demand for housing and family services</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Education Levels</td>
                  <td>High percentage with advanced qualifications</td>
                  <td>Potential growth in specialized sectors</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DataInsights;
