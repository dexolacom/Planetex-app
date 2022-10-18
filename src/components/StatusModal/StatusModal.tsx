import React from 'react';
import { Wrapper, Content, CrossIcon, Title } from './styles';
import { ReactComponent as SuccessIcon} from '../../assets/icons/modalSuccess.svg';
import { ReactComponent as ErrorIcon} from '../../assets/icons/modalError.svg';
import { StatusModalProps } from '../../constants/types';


const StatusModal = ({setIsModalOpen, isError}:StatusModalProps) => {
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <CrossIcon onClick={() => setIsModalOpen(false)}/>
      <Content>
        {isError
          ? <>
              <Title>Transaction error</Title>
              <ErrorIcon/>
            </>
          : <>
              <Title>Transaction success</Title>
              <SuccessIcon/>
            </>
        }
      </Content>
    </Wrapper>
  );
};

export default StatusModal;