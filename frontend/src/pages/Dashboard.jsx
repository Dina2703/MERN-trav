import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "./GoalForm";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getGoals());

    //The return function(from useEffect) is the cleanup function, or when the user leaves the page and the component will unmount.
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>Welcom {user && user.name}</h1>
        <p>Goals Dashboard</p>

        <GoalForm />
      </section>
    </>
  );
}

export default Dashboard;
