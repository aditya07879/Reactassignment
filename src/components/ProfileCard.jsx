export function ProfileCard({ user }) {
  return (
    <div className="w-80 bg-white rounded-xl shadow-md overflow-hidden">
      
      {/* Image */}
      <div className="h-72 overflow-hidden">
        <img
          src={user.picture.large}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Body */}
      <div className="text-center p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {user.name.title} {user.name.first} {user.name.last}
        </h2>

        <p className="text-gray-500 text-sm">
          {user.location.city}, {user.location.country}
        </p>
      </div>

      {/* Footer (social icons fake) */}
      <div className="flex justify-center gap-6 pb-4 text-gray-600">
        <span className="cursor-pointer hover:text-blue-600">f</span>
        <span className="cursor-pointer hover:text-blue-400">t</span>
        <span className="cursor-pointer hover:text-pink-500">i</span>
      </div>
    </div>
  );
}