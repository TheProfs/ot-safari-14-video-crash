# ot-safari-14-video-crash

Demo of Vonage OpentokJS video crash on Safari 14.

## Overview

When passing `publishVideo: false` to `OT.initPublisher` and publishing video
*after* the call starts, the other party can't see my published video.
This is not reproducible on Vonage SDK 2.17. It's only reproducible on
SDK 2.18+.

## Steps to reproduce:

- Visit https://ot-safari-14-video-crash.herokuapp.com with MacOS Safari 14.
- Visit http://ot-safari-14-video-crash.herokuapp.com with iOS Safari 14.
- The call starts without video.
- Press "Publish Video".

## Expected Result:

- The other party can see my video after I press "Publish Video".

## Actual Result

- The other party *cannot* see my published video.

## Notes

If we use SDK version 2.17.7 it works. It doesn't work just on SDK 2.18+.
