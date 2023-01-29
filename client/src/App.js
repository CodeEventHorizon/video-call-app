import React from "react";
import { Typography, AppBar, Box } from "@mui/material";

import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <AppBar
        sx={{
          borderRadius: 15,
          margin: "30px 100px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "600px",
          border: "2px solid black",
        }}
        position="static"
        color="inherit"
      >
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </Box>
  );
};

export default App;
