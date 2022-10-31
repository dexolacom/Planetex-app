/* eslint-disable jsx-quotes */
/* eslint-disable max-lines-per-function */
import { Action, ButtonContent } from './styles';
import { ActionButtonProps } from '../../../constants/types';
import { SolidButton } from '../../../theme';
import Loader from '../../Loader/Loader';

const ActionButton = ({
  isWallet,
  tokenName,
  allowance,
  isApproveLoading,
  isTransLoading,
  approveMint,
  mint,
}: ActionButtonProps) => {
  return (
    <Action>
      {allowance === '0' && tokenName === 'USDT' ? (
        <>
          {isApproveLoading ? (
            <SolidButton disabled>
              <ButtonContent>
                <Loader
                  stroke="#D4E5FF"
                  size="20px"
                  style={{ marginRight: '10px' }}
                />
                Approving
              </ButtonContent>
            </SolidButton>
          ) : (
            <SolidButton
              disabled={!isWallet || isTransLoading}
              onClick={() => approveMint()}
            >
              Approve
            </SolidButton>
          )}
        </>
      ) : (
        <SolidButton
          disabled={!isWallet || isTransLoading}
          onClick={() => mint()}
        >
          {isTransLoading ? (
            <ButtonContent>
              <Loader
                stroke="#D4E5FF"
                size="20px"
                style={{ marginRight: '10px' }}
              />
              Pending
            </ButtonContent>
          ) : (
            'Mint'
          )}
        </SolidButton>
      )}
    </Action>
  );
};

export default ActionButton;
