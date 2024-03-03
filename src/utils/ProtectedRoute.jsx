import FullPage from "@/components/ui/FullPage";
import Spinner from "@/components/ui/Spinner";
import { useUser } from "@/features/login-form/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, userRole } = useUser();

  useEffect(() => {
    if (userRole !== "admin" && !isLoading) navigate("/login");
  }, [navigate, isLoading, userRole]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (userRole) return children;
}

export default ProtectedRoute;
