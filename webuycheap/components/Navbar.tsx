const Navbar = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li className="logo">webuycheap</li>
        <li className="item"><a href="/">home</a></li>
        <li className="item"><a href="/products">products</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;