import { Wrapper } from "./styles";
import { BackdropProps } from '../../constants/types';


const Backdrop = ({children, setIsModalOpen}:BackdropProps) => {
  return (
    <Wrapper onClick={() => setIsModalOpen(false)}>
      {children}
    </Wrapper>
  );
};

export default Backdrop;