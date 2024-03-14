import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet';

export default function Blogcat() {
  const { postSlug } = useParams()
  const [posts, setPosts] = useState({})
  useEffect(() => {
    const postData = async () => {
      await fetch(`https://legalex-global-backend.vercel.app/api/auth/getpost/${postSlug}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setPosts(data));
    };
    postData();
  }, [postSlug]);
  const sanitizedContent = { __html: DOMPurify.sanitize(posts.content) };
  return (
    <div>
      <Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content={posts.title} />
        <meta property="og:description" content={posts.meta} />
        <meta property="og:url" content={`https://technicmentors.com/${posts.slug}`} />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@TechnicMentors" />
        <meta name="twitter:title" content={posts.title} />
        <meta name="twitter:description" content={posts.meta} />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://technicmentors.com/${posts.slug}" ,
            "name": "Technic Mentors",
            "description": " ${posts.meta} " ,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://technicmentors.com/search?q={search_term_string}",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/IOSPlatform",
                  "https://schema.org/AndroidPlatform"
                ]
              },
              "query-input": "rqeuired name=search_term_string"
            }
          }
        `}</script>

        <meta name="description" content={posts.meta} />
      </Helmet>
      <div className="home-container">
        <div
          className="background-image1"
        >
          <div className="color-overlay1 d-flex justify-content-center align-items-center">
            <div>
              <h1
                style={{ color: "#28599D", fontSize: 70 }}
                className="text-white text-center animate__animated animate__zoomIn"
              >
                {posts.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container blog-container">
        <div className='mt-5' dangerouslySetInnerHTML={sanitizedContent}></div>
      </div>
    </div>
  )
}
