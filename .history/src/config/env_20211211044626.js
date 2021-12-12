import {DEV_BACKEND_URL, PROD_BACKEND_URL} from 'react-native-dotenv';

const devEnvairomentVariables = {
  BACKEND_URL: DEV_BACKEND_URL,
};
const prodEnvairomentVariables = {
  BACKEND_URL: PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvairomentVariables : prodEnvairomentVariables;
