import Link from "next/link"
export default function Header() {
  return (
    <>    
    <Link href="/">Home</Link>        
    <Link href="/performance">performance</Link>    
    <Link href="/performance/reliability">reliability</Link>    
    </>
  )
}
