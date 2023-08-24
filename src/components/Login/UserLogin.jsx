const UserLogin = ({ user }) => {
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <article className="relative top-[40%]  flex flex-col items-center tp:col-start-4 tp:col-end-6 tp:row-start-3 tp:row-end-4">
        <header className="text-9xl text-gray-400">
          <i className="bx bxs-user-circle"></i>
        </header>
        <h2 className="font-serif text-2xl text-stone-700">
          {user.firstName} {user.lastName}
        </h2>
        <button
          onClick={handleLogOut}
          className="cursor-pointer border-none bg-none  text-blue-400"
        >
          Log Out
        </button>
      </article>
    </>
  );
};

export default UserLogin;
