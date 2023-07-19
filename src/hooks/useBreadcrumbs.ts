import { useLocation, useHistory, useParams } from 'react-router-dom';

const useBreadcrumbs = () => {
  const location = useLocation();
  const history = useHistory();
  const params = useParams();

  console.log('location: ', location);
  console.log('history: ', history);
  console.log('params', params);
  
  return null;
};

export default useBreadcrumbs;
