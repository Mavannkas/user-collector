import { Container, Typography } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Progress } from "../../UI/Progress";

export const UserList = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "surname",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
    },
  ];

  useEffect(() => {
    fetch(`http://localhost:3001/all`)
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then((res) => {
        setData(res);
      })
      .catch((res) => setError(res))
      .finally(() => setLoading(false));
  }, []);

  if (error) return "Error";
  if (loading) return <Progress />;

  return (
    <Container
      display="flex"
      maxWidth="sm"
      style={{ padding: 30, width: "100%", height: "600px" }}
    >
      <Typography align="center" variant="h2">
        User List
      </Typography>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Container>
  );
};
