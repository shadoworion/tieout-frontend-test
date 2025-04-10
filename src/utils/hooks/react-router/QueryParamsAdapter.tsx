import { useLocation, useNavigate } from "react-router";

export const ReactRouter7Adapter = ({ children }) => {
  const navigate = useNavigate();

  return children({
    location: useLocation(),
    push: (location) =>
      navigate({ search: location.search }, { state: location.state }),
    replace: (location) =>
      navigate(
        { search: location.search },
        { replace: true, state: location.state }
      ),
  });
};
