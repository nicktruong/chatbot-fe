import { CSSProperties } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { MdOutlineContentCopy } from 'react-icons/md';

import { styles } from './styles';
import { usePrepareHook } from './helpers';

export const Integration = () => {
  const { botDetail, onCopy } = usePrepareHook();

  return (
    <Box sx={styles.container}>
      <Text sx={styles.heading}>Webchat</Text>
      <Box>
        <Text sx={styles.embeddedHeading}>Embedded</Text>
        <Box
          sx={styles.codeContainer}
          onClick={() =>
            onCopy(
              `<script src="https://cdn.jsdelivr.net/gh/nicktruong/chatbot-widget/dist/assets/index.js"></script>`,
            )
          }
        >
          <Text sx={styles.code}>
            &lt;script
            src="https://cdn.jsdelivr.net/gh/nicktruong/chatbot-widget/dist/assets/index.js"&gt;&lt;/script&gt;
          </Text>

          <MdOutlineContentCopy
            id="copy-btn"
            style={styles.copyBtn as CSSProperties}
          />
        </Box>
      </Box>
      <Box>
        <Text sx={styles.embeddedHeading}>Initialize</Text>
        <Box
          sx={styles.codeContainer}
          onClick={() =>
            onCopy(`initChatbot({\n\tbotId: "${botDetail?.id}"\n});`)
          }
        >
          <Text
            sx={{ ...styles.code, ...styles.codeMultiline }}
            dangerouslySetInnerHTML={{
              __html: `initChatbot(&#123;\n\tbotId: "${botDetail?.id}"\n&#125;);`,
            }}
          ></Text>

          <MdOutlineContentCopy
            id="copy-btn"
            style={styles.copyBtn as CSSProperties}
          />
        </Box>
      </Box>
    </Box>
  );
};
