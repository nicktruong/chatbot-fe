import { FaEarListen } from 'react-icons/fa6';
import { TbArrowMoveRight } from 'react-icons/tb';

import { CardTypeEnum } from '@/enums';

export const mapCardTypeToIcon = (cardType: string) => {
  switch (cardType) {
    case CardTypeEnum.EXPRESSION:
      return <TbArrowMoveRight style={{ color: '#008001', width: '1rem' }} />;
    case CardTypeEnum.NUMBER:
      return (
        <FaEarListen
          style={{ color: '#008001', width: '1rem', fontSize: '0.75rem' }}
        />
      );
    default:
      break;
  }
};
