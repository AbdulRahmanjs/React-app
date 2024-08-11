// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// // import BlogPost from '../components/BlogPost';

// const Post = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     // Fetch the post based on ID or define it here
//     setPost({
//       id: parseInt(id),
//       title: `Post ${id}`,
//       content: `This is the content of post ${id}.`,
//     });
//   }, [id]);

//   return (
//     <div>
//       {post ? <BlogPost post={post} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default Post;
