import TabItem from "./TabItem";

const TabList = ({tab}) => {
  return (
    <>
      <ul className="flex flex-row space-x-5">
        {
          tab.map((item, index) => <TabItem key={index} item={item} />)
        }
      </ul>
    </>
  )
}
export default TabList;