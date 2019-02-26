import React from 'react'
import { rhythm } from '../utils/typography'

export default ({ settings }) => (
  <div
    style={{
      display: 'flex',
      marginBottom: rhythm(2.5),
    }}
  >
    <img
      src={settings.author_avatar.imgix_url}
      alt={settings.author_name}
      style={{
        marginRight: rhythm(4 / 2),
        marginBottom: 0,
        width: rhythm(8),
        height: rhythm(4),
      }}
    />
    <div dangerouslySetInnerHTML={{ __html: settings.author_bio }} />
  </div>
)
