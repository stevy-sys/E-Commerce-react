import { Box, Container } from "@material-ui/core";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Box>
  );
};

export default Layout;
