const Profile: React.FC = () => {
  //   const { user } = useAuth();
  const user = { name: "of", id: 12, email: "if" };
  return (
    <>
      <h1>Profile</h1>
      <p>Hello there {user?.name ?? ""}</p>
      <p>Your id is {user?.id}</p>
      <p>Your email is {user?.email}</p>
    </>
  );
};

export default Profile;
