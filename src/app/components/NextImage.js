import Image from "next/image"
import NextSVG from '../../../public/next.svg'
export default function NextImage() {
  return (
    <div>
        <Image src={NextSVG}
            fill
            style={{objectFit:'contain',zIndex:-1}}
        />
    </div>
  )
}
