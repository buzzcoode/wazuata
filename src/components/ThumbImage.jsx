export const ThumbImage = ({ srcImage, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-full overflow-hidden rounded-md bg-gray-100"
    >
      <img
        src={srcImage}
        width={300}
        height={200}
        alt="Image"
        className="hover:scale-110 transition-all ease-linear cursor-pointer"
      />
    </button>
  )
}