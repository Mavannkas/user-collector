import { Box, Container } from "@material-ui/core";

import CircularProgress from "@material-ui/core/CircularProgress";

export const Progress = () => {
  return (
    <Container
      maxWidth="sm"
      style={{ padding: 30, width: "100%", height: "600px" }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ padding: 30, width: "100%", height: "100%" }}
      >
        <CircularProgress />
      </Box>
    </Container>
  );
};
