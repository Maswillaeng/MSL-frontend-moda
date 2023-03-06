const TabItem = ({item}) => {
  const {name} = item;
  return(
    <>
    <li className="font-bold">
      {name}
    </li>
    </>
  )
}
export default TabItem;