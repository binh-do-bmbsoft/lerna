import { createSetLoadingStateAction } from 'src/redux/store/loading/action';
import { useDispatch, useSelector } from 'react-redux';
function useLoading() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);
  const setIsLoading = newState => dispatch(createSetLoadingStateAction(newState));
  return [isLoading, setIsLoading];
}

export default useLoading;
