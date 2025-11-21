import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

export function initAmplify() {
  Amplify.configure(awsExports);
}
