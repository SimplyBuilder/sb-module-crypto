## [SimplyBuilder GitHub Pages Starter Project Template](https://github.com/SimplyBuilder/template-sb-github-pages)   


### go to: `settings/pages`

### change sources to: `Github Actions`

### configure the custom domain if applicable.

### customize the file: `.github/workflows/deploy-to-pages.yml`

By default, it comes to carry out the process **manually**, and can perform tag deployment, to facilitate rollback.      
But if you prefer, you can uncomment **lines 6 and 7**, to carry out the automatic process during the push to the default branch.      
**line 43** refers to the same directory described in **line 12** of `vite.config.js`


### execute manual deployments, selecting branch or tag or track the progress of manual or automated deployments in the `Actions` tab of your repository

### Now your project is live at the url configured in `settings/pages`. Change your files as you wish and make your deployments automatic or controlled.

### Demo online: [https://simplybuilder.github.io/template-sb-github-pages/](https://simplybuilder.github.io/template-sb-github-pages/)


## Deploy tag/branch error?
### see `settings/environments` and customize your rules.