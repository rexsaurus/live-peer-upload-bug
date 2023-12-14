This reproduces the following issues trying to upload a video to Livepeer (sample video)

```
file:///Users/rexstjohn/Desktop/livepeer/index.js:13
  .requestAssetUpload(assetData)
   ^

TypeError: livepeer.requestAssetUpload is not a function
    at file:///Users/rexstjohn/Desktop/livepeer/index.js:13:4
    at ModuleJob.run (node:internal/modules/esm/module_job:217:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async loadESM (node:internal/process/esm_loader:34:7)
    at async handleMainPromise (node:internal/modules/run_main:66:12)
```

To start:

>> fix the API key with a live API key
>> run npm install
>> run npm start

This is using the code here: https://docs.livepeer.org/developers/guides/upload-video-asset

