import type { Register } from 'claude-code'

import { STRIP } from './strip-data.js'

// Dải 720x60 nằm ngay trên ô nhập: 8 em doll pixel (mỗi em 32px, bằng nút "+") chạy tự do.
// Chuyển động và phản ứng khi rê chuột đều là CSS trong SVG, không cần script.
export const register: Register = on => {
  on('ui.render', { component: 'AbovePrompt' }, ($, e, next) => {
    // Svg chỉ có trên desktop và mobile; terminal không vẽ được.
    if (e.props.hasSurvey || (e.surface !== 'desktop' && e.surface !== 'mobile')) {
      return next(e)
    }

    const { Box, Svg } = $.ui.resolve(e)

    return (
      <Box>
        <Svg
          source={STRIP}
          width={790}
          height={60}
          alt="Tám em doll Hakyuha dạng pixel đang chạy nhảy phía trên ô nhập"
          isInteractive
        />
      </Box>
    )
  })
}
