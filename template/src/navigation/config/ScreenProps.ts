import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteNames, RouteParams} from './';

export default interface INativeStackScreenProps<T extends RouteNames>
  extends NativeStackScreenProps<RouteParams, T> {}
