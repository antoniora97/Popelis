import ContextMovieCard from "../components/ContextMovieCard";
import { useAuth } from "../context/AuthContext";

export default function LandingPage() {

  const { user, signOut } = useAuth()

  console.log(user)
  if (!user) {
    return (
      <p>Cargando...</p>
    )
  }

  return (
    <div>
      <p>{user?.email}</p>
      <p>{user?.user_metadata.full_name}</p>
      <img src={user.user_metadata.avatar_url} alt="" />
      <button onClick={signOut}>Logout</button>
      <ContextMovieCard />
    </div>
  );
}
