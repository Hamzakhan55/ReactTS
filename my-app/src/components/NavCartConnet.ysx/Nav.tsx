interface Props {
    cartItemsCount: number
}
function Nav({cartItemsCount}: Props) {
  return (
    <div>Nav: {cartItemsCount}</div>
  )
}

export default Nav;