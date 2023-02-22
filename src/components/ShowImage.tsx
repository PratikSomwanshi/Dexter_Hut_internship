import React, { useEffect } from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";

interface ImageProps {
    item: any;
}

const ShowImage = ({ item }: ImageProps) => {
    useEffect(() => {
        sessionStorage.clear();
        console.log("Pratik");
    }, []);

    const handleOnClick = (item: any) => {
        sessionStorage.setItem("internship_assignment_url", item.download_url);
        sessionStorage.setItem("internship_assignment_id", item.id);
        sessionStorage.setItem("internship_assignment_author", item.author);
    };

    return (
        <Link to={"/" + item.id}>
            <ImageListItem key={item.id}>
                <img
                    src={item.download_url}
                    height="250px"
                    onClick={() => handleOnClick(item)}
                />
            </ImageListItem>
        </Link>
    );
};

export default ShowImage;
