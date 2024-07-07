import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";

import { FetchOffsetResponse, Post } from "../interfaces/post.interface";

const OffsetPagination: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
    fetchPosts(newPage + 1, rowsPerPage); // API is 1-based page count
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const limit = parseInt(event.target.value, 10);
    setRowsPerPage(limit);
    setPage(0);
    fetchPosts(1, limit);
  };

  const fetchPosts = async (pageNum: number, limit: number) => {
    const { data } = await axios.get<FetchOffsetResponse>(
      `http://localhost:3000/posts/offset?limit=${limit}&page=${pageNum}`
    );
    setPosts(data.posts);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchPosts(1, rowsPerPage);
  }, []);

  return (
    <Box sx={{ padding: "3rem 15rem" }}>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Offset Pagination - Table With Pages
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "65vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Content</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post._id}>
                  <TableCell scope="row">{post.title}</TableCell>
                  <TableCell>{post.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalPages * rowsPerPage}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default OffsetPagination;
