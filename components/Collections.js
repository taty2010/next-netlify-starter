export default function Collections({ collection1, collection2 }) {
    return (
      <ul className="collections">
        <li className="collection1">
            <img src="https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
            <p>{collection1}</p>
        </li>
        <li className="collection2">
            <img src="https://images.pexels.com/photos/5655011/pexels-photo-5655011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
            <p>{collection2}</p>
        </li>
      </ul>
    )
  }
  