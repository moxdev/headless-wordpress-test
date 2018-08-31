import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import { Config } from "../config"

export default class BlogPost extends Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;

    const postsRes = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/post?slug=${slug }`);
    const post = await postsRes.json();
    return {
      post
    };
  }

  render() {
    const { post } = this.props;
    console.log(post);

    return (
      <div>
        <h1>{post.title.rendered}</h1>
      </div>
    )
  }
}