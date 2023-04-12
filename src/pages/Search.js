import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div>
      <form className="flex justify-center m-20">
        <div className="relative">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute w-5 h-5 text-slate-400 mt-3.5 inset-y-0 left-0 flex items-center pl-4 pointer-events-none"></FontAwesomeIcon>
          <input className="block w-[450px] p-3 pl-12 rounded-lg border-slate-400 point" type="text" placeholder="검색"/>
        </div>
      </form>
    </div>
  )
}
export default Search;