import { Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import ImageLoading from "./pages/ImageLoading";
import { ReactQueryDevtools } from "react-query/devtools";
import ImageDetail from "./pages/ImageDetail";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<ImageLoading />} />
                <Route path="/:id" element={<ImageDetail />} />
            </Routes>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};

export default App;
