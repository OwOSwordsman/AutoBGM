# AutoBGM

Inspired by OperaGX's music player, AutoBGM brings a similar functionality to chromium. Automatically pause your music when there's another tab playing audio, and resume your music once the other audio stops.

## More info and Caveats
Pin the tab that has your music, and continue with your usual browsing. The extension will not affect the music tab if you have the music paused manually.

The extension works by simulating the spacebar, so it will work for every site that can be paused and resumed with the spacebar. Only have one tab pinned otherwise the you may get undesired results.

## Installation
1. Download the .crx file from [releases](https://github.com/OwOSwordsman/AutoBGM/releases/)
2. Navigate to `chrome://extensions`
3. Enable developer mode
4. Drag the .crx file into the page

Alternatively, you can download/clone this repo and load the /src folder.

## Credits
 - [Codevolution's Chrome Extension Tutorial](https://youtube.com/playlist?list=PLC3y8-rFHvwg2-q6Kvw3Tl_4xhxtIaNlY) for the short and detailed videos
 - [MusicControllerChromeExtension](https://github.com/MathiasGilson/MusicControllerChromeExtension) for giving me the idea of controlling the audio with the Spacebar
 - [Grepper](https://github.com/MathiasGilson/MusicControllerChromeExtension) for where I found the js code for simulating the Spacebar
 - [Chrome's wonderful documentation](https://developer.chrome.com/docs/extensions/mv3/)