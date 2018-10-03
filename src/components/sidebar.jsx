import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const SideBar = ({ blogList }) => {
  return (
    <div>
      <div className="blog_post_list">
        {blogList.edges.map(post => (
          <div key={post.node.id}>
            <Link to={post.node.fields.slug}>
              <h3 className="has-text-weight-semibold post-title">{post.node.frontmatter.title}</h3>
            </Link>
            <small className="is-italic">{post.node.frontmatter.date}</small>
            <div id="sidebar-info">
              <img src={post.node.frontmatter.profile_image.publicURL} className="sidebar-image" />
              <small>{post.node.frontmatter.author}</small>
            </div>
          </div>
        ))}

        <div className="donate-fields">
          <div>
            <label>Donate BTC</label>
            <div className="field has-addons">
              <p className="control codes">
                <input className="input copy-input" type="text" value="3BJW4B6GGpoQrjeom6RpVtkza3XPw2qjoK" readOnly />
              </p>
              {/* <p className="control copy">
                <a className="button is-static copy-btn">Copy</a>
              </p> */}
            </div>
          </div>

          <div>
            <label>Donate ETH</label>
            <div className="field has-addons">
              <p className="control codes">
                <input className="input copy-input" type="text" value="0xD7599b3D15805aDF3144676914964e8fff53C925" readOnly />
              </p>
              {/* <p className="control copy">
                <a className="button is-static copy-btn">Copy</a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar

