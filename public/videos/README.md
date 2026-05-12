# Brand videos

Place the institutional video at:

`biodonth-tour.mp4`

Specs:
- Format: MP4 (H.264 + AAC), web-optimized (moov atom at the start — use `-movflags +faststart` in ffmpeg)
- Resolution: 1920×1080 (1080p) preferred. Minimum 1280×720.
- Duration: 30s to 90s ideal. Longer than 2min hurts engagement.
- File size target: < 15 MB. Compress aggressively — this is web, not cinema delivery.
- Audio: keep, but the modal player starts muted; user can unmute.

Suggested ffmpeg compression command (run on the source file):

```bash
ffmpeg -i source.mov -vcodec libx264 -crf 24 -preset slow -vf "scale=1920:-2" -acodec aac -b:a 128k -movflags +faststart biodonth-tour.mp4
```

Until a real video is placed here, the VideoSection component renders a placeholder state.
