import { useToast } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { useBotDetail } from '@/hooks';

export const usePrepareHook = () => {
  const toast = useToast();
  const { id } = useParams();
  const botDetail = useBotDetail(id ?? '');

  const handleCopy = async (text: string) => {
    await window.navigator.clipboard.writeText(text);

    toast({
      duration: 5000,
      title: 'Copied',
      isClosable: true,
      status: 'success',
    });
  };

  return { botDetail, onCopy: handleCopy };
};
