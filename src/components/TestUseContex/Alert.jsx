
import { useCustomContext } from './Context/Context';

export const Alert = () => {
  const {toggleValue} = useCustomContext();
  console.log(toggleValue);
  return <div>{toggleValue && <p>Messaageeeeee</p>}</div>;
};
