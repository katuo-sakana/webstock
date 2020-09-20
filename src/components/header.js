import React from "react"
import { Link } from "gatsby"

export default () => (
  <header className="header">
    <div className="container">
      <nav className="nav">
        <ul>
          <li>
            <Link to={`/`}>トップ</Link>
          </li>
          <li>
            <Link to={`/blog/`}>BLOG</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
