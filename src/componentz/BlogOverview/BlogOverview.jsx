import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { All_Blogs, Main_Article } from "../../constants/Data";
import { firestore } from "../../firebase/config";
import BlogFilterer from "../BlogFilterer/BlogFilterer";
import BlogOverviewPostPreview from "../BlogOverviewPostPreview/BlogOverviewPostPreview";
import CustomButton from "../CustomButton/CustomButton";
import Spacing from "../Spacing/Spacing";
import placeholder from "../../assetz/images/placeholder.png";

import "./styles.scss";

const BlogOverview = () => {
  const location = useLocation().pathname;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [posts, setPosts] = useState([]);
  const [noPost, setNoPost] = useState(false);
  const [onEndReachedCalled, setOnEndReachedCalled] = useState(false);
  const [blogsRef] = useState(
    firestore.collection("blogs").doc("all").collection("posts")
  );

  const onLoadTagPosts = () => {
    setIsLoading(true);
    const slug = blogsRef.orderBy("created_at").limit(10);
    slug.onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setNoPost(true);
        return;
      }
      setNoPost(true);
      let newPosts = [];
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

      for (let i = 0; i < snapshot.docs.length; i++) {
        newPosts.push(snapshot.docs[i].data());
      }
      setPosts(newPosts);
    });
  };
  const onLoadMoreTagPosts = async () => {
    if (lastDoc) {
      setOnEndReachedCalled(false);
      setIsMoreLoading(true);
      const slug = await blogsRef
        .orderBy("created_at")
        .startAfter(lastDoc.data().created_at)
        .limit(10);
      slug.onSnapshot((snapShot) => {
        if (!snapShot.empty) {
          let newPosts = posts;

          setLastDoc(snapShot.docs[snapShot.docs.length - 1]);

          for (let i = 0; i < snapShot.docs.length; i++) {
            newPosts.push(snapShot.docs[i].data());
          }

          setPosts(newPosts);
          if (snapShot.docs.length < 10) setLastDoc(null);
        } else {
          setLastDoc(null);
        }
      });
      setIsMoreLoading(false);
    }
  };
  useEffect(() => {
    console.log(All_Blogs);
    onLoadTagPosts();
  }, [""]);
  return (
    <div className="blog-overview">
      <div className="main-article">
        <CustomButton label={`ARTICLE OF THE WEEK`} />
        <Spacing height={`2em`} />
        <div className="article-data">
          <div
            className="tumbnail"
            style={{
              backgroundImage: `linear-gradient(#0aa7ff3a, #0aa5ff3a), url(${placeholder})`,
            }}
          ></div>
          <Spacing width={`2em`} />
          <div className="article-text-button">
            <div className="article-text">
              <h1 className="main-article-title">{Main_Article.title}</h1>
              <p className="main-article-hook">{Main_Article.hook}</p>
            </div>
            <Spacing height={`12em`} />
            <div className="cr-btn-container">
              <CustomButton
                label={`Continue Reading`}
                onClick={() =>
                  history.push(
                    `${
                      Main_Article.main_tag === "parents"
                        ? "/blogs/for-parents"
                        : Main_Article.main_tag === "siblings"
                        ? "/blogs/for-siblings"
                        : "/blogs/for-carers"
                    }/${Main_Article.title.split(" ").join("-").toLowerCase()}`
                  )
                }
                className={`cr-btn`}
              />
            </div>
          </div>
        </div>
      </div>
      <Spacing height={`6em`} />
      <BlogFilterer />
      <Spacing height={`6em`} />
      <div className="posts">
        {All_Blogs.map((item, index) => (
          <BlogOverviewPostPreview key={index} data={item} />
        ))}
      </div>
      {onEndReachedCalled && <CustomButton label={`LOAD MORE`} />}
    </div>
  );
};

export default BlogOverview;
