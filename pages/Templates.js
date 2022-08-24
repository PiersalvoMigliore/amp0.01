import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Box,
  Typography,
  Modal,
  Fade,
  Backdrop,
  IconButton,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { createBreakpoints } from "@mui/system";
import ButtonAM from "/src/components/ButtonAM.js";
import CloseIcon from "@mui/icons-material/Close";
import MyImage from "/src/components/MyImage.js";
import styles from "/styles/Home.module.css";
import LogoHeader from "/src/components/LogoHeader.js";
import RestaurantMain from "../src/images/RestaurantMain.png";
import Restaurant1 from "../src/images/Restaurant1.png";
import Restaurant2 from "../src/images/Restaurant2.png";
import Restaurant3 from "../src/images/Restaurant3.png";
import Restaurant4 from "../src/images/Restaurant4.png";
import Restaurant5 from "../src/images/Restaurant5.png";
import Ecommerce1 from "../src/images/Ecommerce1.png";
import Ecommerce2 from "../src/images/Ecommerce2.png";
import Ecommerce3 from "../src/images/Ecommerce3.png";
import Ecommerce4 from "../src/images/Ecommerce4.png";
import EcommerceMain from "../src/images/EcommerceMain.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Footer from "/src/components/Footer.js";

const imageStyle = {
  height: "80%",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-evenly",
};

const commonComingStyle = {
  marginLeft: 3,
  borderRadius: "25px",
  backgroundColor: "white",
  width: "350px",
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "36px",
  fontWeight: 500,
  color: "#8D8484",
};

function Templates() {
  const router = useRouter();
  const breakpoints = createBreakpoints({});
  const matches = useMediaQuery(breakpoints.down("lg"));

  const modalStyle = {
    overflow: matches && "scroll",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: matches ? "100%" : "80%",
    height: matches ? "100vh" : "80vh",
    bgcolor: "background.paper",
    borderRadius: matches ? "0px" : "25px",
    boxShadow: 24,
    p: 4,
  };

  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState({
    title: "",
    images: [],
  });

  const handleOpen = ({ title, images }) => {
    setCurrentTemplate({
      title: title,
      images: images,
    });
    setOpen(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleClose = () => {
    setLoading(true);
    setOpen(false);
  };

  const mobileStyle = matches && {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div className={styles.commonBackground}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h1">{currentTemplate.title}</Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: 2,
                backgroundColor: "#D8D8D8",
                borderRadius: "25px",
                flexDirection: matches && "column",
              }}
            >
              {loading ? (
                <Box
                  sx={{
                    height: "420px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress sx={{ color: "#3e9fef" }} />
                </Box>
              ) : (
                currentTemplate.images.map((obj) => (
                  <MyImage
                    layout={"fixed"}
                    height={matches ? "280px" : "420px"}
                    width={matches ? "150px" : "200px"}
                    key={obj}
                    src={obj.url}
                  />
                ))
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
      <LogoHeader />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">Our Templates</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: matches && "column" }}>
        <Box
          sx={{
            width: "50%",
            height: "70vh",
            paddingLeft: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={mobileStyle}>
            <Typography sx={{ paddingBottom: 1 }} variant="h5">
              Restaurant
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ButtonAM
                onClick={() =>
                  handleOpen({
                    title: "Simple Restaurant",
                    images: [
                      { url: Restaurant4 },
                      { url: Restaurant5 },
                      { url: Restaurant1 },
                      { url: Restaurant2 },
                      { url: Restaurant3 },
                    ],
                  })
                }
              >
                <Box sx={imageStyle}>
                  <MyImage height="150px" width="75px" src={RestaurantMain} />
                  <ArrowForwardIosIcon sx={{ fontSize: 55 }} />
                </Box>
              </ButtonAM>
              {!matches && <Box sx={commonComingStyle}>coming soon</Box>}
            </Box>
          </Box>
          <Box sx={mobileStyle}>
            <Typography sx={{ paddingBottom: 1 }} variant="h5">
              E-Commerce
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ButtonAM
                onClick={() =>
                  handleOpen({
                    title: "Simple E-Commerce",
                    images: [
                      { url: Ecommerce1 },
                      { url: Ecommerce2 },
                      { url: Ecommerce3 },
                      { url: Ecommerce4 },
                    ],
                  })
                }
              >
                <Box sx={imageStyle}>
                  <MyImage height="150px" width="75px" src={EcommerceMain} />
                  <ArrowForwardIosIcon sx={{ fontSize: 55 }} />
                </Box>
              </ButtonAM>
              {!matches && <Box sx={commonComingStyle}>coming soon</Box>}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: !matches ? "50%" : "100%",
            display: "flex",
            justifyContent: matches && "center",
            alignItems: "center",
            height: !matches ? "70vh" : "20vh",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Pick one of our templates or tell us about your design!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 3,
        }}
      >
        <Typography variant="h2">more coming soon...</Typography>
      </Box>
      <Footer />
    </div>
  );
}

export default Templates;
