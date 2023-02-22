import React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { BiArrowBack } from "react-icons/bi";
import { Box } from "@mui/material";

const ImageDetail = () => {
    const url = sessionStorage.getItem("internship_assignment_url");
    const author = sessionStorage.getItem("internship_assignment_author");

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                position: "relative",
            }}>
            <Typography>Name : Pratik Somwanshi</Typography>
            <Box
                sx={{
                    position: "absolute",
                    top: "2rem",
                    left: "-9.4rem",
                }}>
                <Link to="/">
                    <Button variant="outlined" startIcon={<BiArrowBack />}>
                        Go Back
                    </Button>
                </Link>
            </Box>
            {url && author ? (
                <>
                    <img src={url} alt="img" height="650rem" />
                    <Typography>Author Name : {author}</Typography>
                </>
            ) : (
                <>
                    <Typography variant="h3">No Image Found</Typography>
                    <Link to="/">
                        <Button variant="outlined">Home</Button>
                    </Link>
                </>
            )}
        </Container>
    );
};

export default ImageDetail;
