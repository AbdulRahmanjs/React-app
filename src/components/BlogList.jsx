import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ postes }) => {
  return (
    <div className='container-fluid'>
      <h2>Blog Posts</h2>
      <div className="row">
        {postes.map((post, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
              <img src={post.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`${post.url}`} target='_blank'>{post.content}</Link>
                </h5>
              </div>
            </div>
          </div>
        ))
        }
      </div>
      <ul>
      </ul >
    </div >
  );
};
export default BlogList;