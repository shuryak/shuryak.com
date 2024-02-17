import React from 'react'
import '@styles/IconLink.scss'

const IconLink: React.FC<{iconUrl: string, alt: string, href: string}> =
  ({iconUrl, alt, href}) => {
  return (
    <a className="icon-link" href={href} target="_blank">
      <img src={iconUrl} alt={alt} width={24} height={24}/>
    </a>
  )
}

export default IconLink
