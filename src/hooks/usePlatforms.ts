// import useData from "./useData";
import platforms from "../data/platform";

// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// const usePlatform = () => useData<Platform>("/platforms/lists/parents");

const usePlatform = () => ({ data: platforms, error: null, isLoading: false });

export default usePlatform;
