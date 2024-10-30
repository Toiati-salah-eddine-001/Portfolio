import "./Header.css"

const Header = () => {
  return (
<header className="flex justify-between items-center  px-20 pt-7 bg-transparent">
  <h3 className="text-green-700 text-2xl font-bold ">
    Full Stack <br /> Developer
  </h3>
  <ul className="text-green-700 flex space-x-10 font-bold me-5">
    <li className=" transition duration-300 ">
      <a href="#">About me</a>
    </li>
    <li className=" transition duration-300 ">
      <a href="#">Skills</a>
    </li>
    <li className=" transition duration-300 ">
      <a href="#">Project</a>
    </li>
    <li className=" transition duration-300 ">
      <a href="#">Contact</a>
    </li>
  </ul>
</header>
  )
}

export default Header
