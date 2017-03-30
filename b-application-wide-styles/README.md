This project shows three ways to import a third party library. In this case it is the bootstrap library. 

1. Download bootstrap, put it in assets and link it in the index.html
2. Link the CDN in the index.html file.
3. CLI specific: Put the path of bootstrap in the styles array inside .angular-cli.json. Put it before any other
   stylesheet if you want the other stylesheets to override bootstrap -- order matters.
4. You can not download and not use the CDN, but use NPM to install the node module. Then adjust the path
   in the angular-cli.json to reflect the path to bootstrap in the node_modules file.
