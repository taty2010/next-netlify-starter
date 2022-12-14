export default function Nav({ title }) {
    return (
      <>
        <span className="sale-banner">20% off t-shirts. Limited Time Only!</span>
        <ul className="navigation">
          <li><a href="/">{title}</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Sale</a></li>
        </ul>
      </>
    )
  }
  