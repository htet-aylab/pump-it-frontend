'use client'

import Image from "next/image"
import Link from "next/link"

export const ImageLink = ({src, href, alt, width, height, imgStyle, ...props}) => {
    return (
    <Link href={href} {...props}>
        <Image src={src} alt={alt} width={width} height={height} style={imgStyle} />
    </Link>
    )
}