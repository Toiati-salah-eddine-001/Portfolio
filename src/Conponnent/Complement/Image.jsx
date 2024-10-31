
const Image = ({src}) => {
  return (
    <div className=" h-[480px] w-[480px] rounded-full me-4">
        <img src={src} alt="Your Image" className=" w-[100%] rounded-full"/>
    </div>
  )
}

export default Image
