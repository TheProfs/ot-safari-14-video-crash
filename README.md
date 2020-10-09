# ot-safari-14-video-crash

Demo of Vonage OpentokJS video crash on Safari 14.

## Overview

When passing `publishVideo: false` to `OT.initPublisher` and publishing video
*after* the call starts, the other party can't see my published video.
This is not reproducible on Vonage SDK 2.17. It's only reproducible on
SDK 2.18+.

If the video is started (published) before the other party joins, then it works.

## Steps to reproduce:

- Visit https://ot-safari-14-video-crash.herokuapp.com with MacOS Safari 14.
- Visit http://ot-safari-14-video-crash.herokuapp.com with iOS Safari 14.
- After *both* parties join the link, Press "Publish Video".

**Note:** Do not press "Publish Video" until both parties visit the link!

## Expected Result:

- The other party can see my video after I press "Publish Video".

## Actual Result

- The other party *cannot* see my published video.

## Notes

If we use SDK version 2.17.7 it works. It doesn't work just on SDK 2.18+.
