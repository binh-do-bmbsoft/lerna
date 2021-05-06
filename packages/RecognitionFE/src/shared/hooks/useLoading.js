import { useSelector, useDispatch } from 'redux';
import { createSetLoadingStateAction } from 'src/redux/store/loading/action';

function useLoading() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);
  const setIsLoading = newState => dispatch(createSetLoadingStateAction(newState));
  return [isLoading, setIsLoading];
}

export default useLoading;