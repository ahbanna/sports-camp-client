import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Sports Camp | ${title}`;
  }, [title]);
};
export default useTitle;
