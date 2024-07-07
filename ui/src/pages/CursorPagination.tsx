import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

import { FetchCursorResponse, Post } from "../interfaces/post.interface";

const CursorPagination = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [nextCursor, setNextCursor] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async () => {
    const cursorParam = nextCursor ? `&cursor=${nextCursor}` : "";
    const { data } = await axios.get<FetchCursorResponse>(
      `http://localhost:3000/posts/cursor?limit=10${cursorParam}`
    );
    setPosts((prevPosts) => [...prevPosts, ...data.posts]);
    setNextCursor(data.nextCursor);
    setHasMore(data.posts.length > 0);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box sx={{ padding: "3rem 15rem" }}>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Cursor Pagination - Infinite Scrolling
      </Typography>

      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>You have seen it all</b>
          </p>
        }
      >
        <Grid container spacing={2} style={{ padding: "20px" }}>
          {posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={6} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography color="textSecondary">{post.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default CursorPagination;
