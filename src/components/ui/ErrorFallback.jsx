import FullPage from "./FullPage";
import { Button } from "./button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <FullPage>
      <h1>Something went wrong 😅</h1>
      <p>{error.message}</p>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </FullPage>
  );
}

export default ErrorFallback;
