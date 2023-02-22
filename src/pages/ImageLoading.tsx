import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import ImageList from "@mui/material/ImageList";
import ShowImage from "../components/ShowImage";
import { DotLoader } from "react-spinners";
import { Typography } from "@mui/material";

const ImageLoading = () => {
    const localPageNumber = localStorage.getItem(
        "internship_assignment_pageNumber"
    );

    const [pageNumber, setPageNumber] = useState(
        localPageNumber ? JSON.parse(localPageNumber) : 1
    );

    localStorage.setItem(
        "internship_assignment_pageNumber",
        JSON.stringify(pageNumber)
    );

    const handleOnChange = (eve: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };

    const getImg = () => {
        return axios.get(
            `${import.meta.env.VITE_BASE_URL}?page=${pageNumber}`,
            {
                params: { limit: 20 },
            }
        );
    };

    const results = useQuery(["img", pageNumber], getImg);

    return (
        <>
            <Typography
                sx={{
                    textAlign: "center",
                }}>
                Name : Pratik Somwanshi
            </Typography>
            <Container
                sx={{
                    minHeight: "86vh",
                    marginTop: "5vh",
                }}>
                {!results.isLoading && results.data ? (
                    <ImageList variant="masonry" cols={4} gap={10}>
                        {results.data.data.map((item: any) => {
                            return <ShowImage item={item} />;
                        })}
                    </ImageList>
                ) : (
                    <Box
                        sx={{
                            height: "86vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: "1rem",
                        }}>
                        <DotLoader color="#999" />
                        Loading
                    </Box>
                )}
            </Container>
            <Box
                sx={{
                    width: "100vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px 0",
                }}>
                <Pagination
                    count={10}
                    shape="rounded"
                    page={pageNumber}
                    onChange={handleOnChange}
                />
            </Box>
        </>
    );
};

export default ImageLoading;
