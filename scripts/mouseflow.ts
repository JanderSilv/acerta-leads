window['_mfq'] = window['_mfq'] || []

const initMouseflow = () => {
  const mf = document.createElement('script')
  mf.type = 'text/javascript'
  mf.defer = true
  mf.src = '//cdn.mouseflow.com/projects/4b2af8c6-3829-4696-9fce-71d40c30bfdf.js'
  document.getElementsByTagName('head')[0].appendChild(mf)
}

initMouseflow()
