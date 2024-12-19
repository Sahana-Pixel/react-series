
// we are passing here props
// bydeafulat its called props
// props is object it can be used porps.username
// function Card(props)instead of this it is dirctly distructed as function Card({username})
function Card({username,btnText="select me"}) {
    console.log(username, btnText)
    // just like varible use this username javascript inject
  return (
    <div>
      <div className="flex justify-center items-center bg-black ">
      <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="meow.jpg"
          alt="Card Image"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
          <p className="mt-2 text-gray-600">
            This is a simple card component created using Tailwind CSS. You can
            customize it as per your needs.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded">
              {btnText}
              {/* if there is value then btnText excutes else select */}
                {/* if the person doesnt handle porps*/}
            </button>
            <span className="text-gray-500 text-sm">More Info</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
